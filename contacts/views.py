from django.shortcuts import render

from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.contrib import messages
from .forms import ContactForm

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