from django.shortcuts import render

from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.contrib import messages
from .forms import ContactForm
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PartnershipSerializer


class ContactView(FormView):
    template_name = 'contacts/contact.html'
    form_class = ContactForm
    success_url = reverse_lazy('contact')

    def form_valid(self, form):
        form.save()
        messages.success(self.request, "Your message has been sent successfully! ✅")
        return super().form_valid(form)

    def form_invalid(self, form):
        messages.error(self.request, "There was an error sending your message. ❌")
        return super().form_invalid(form)
    



@api_view(['POST'])
def apply_partnership(request):
    serializer = PartnershipSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        # Pro-tip: You could trigger an email to David here
        return Response({"message": "Application received. The OmniNile team will reach out."}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
