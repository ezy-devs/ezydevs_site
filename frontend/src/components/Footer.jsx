function Footer() {
    return (
        <footer id="contact" class="bg-slate pt-24 pb-12 border-t border-steel/10">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 class="text-3xl text-white font-light mb-2">Initiate Collaboration</h2>
                    <p class="text-steel/60 mb-8">Direct lines for enterprise and government inquiries.</p>
                    <a href="mailto:nzorovemmanuel@gmail.com" class="text-emerald hover:text-white border-b border-emerald pb-1 transition-colors">Connect with Engineering</a>
                </div>
                <div class="grid grid-cols-2 gap-8 text-sm text-steel/60">
                    <div>
                        <h4 class="text-white font-bold mb-4">Locations</h4>
                        <ul class="space-y-2">
                            <li>Lagos, NG</li>
                            <li>Abuja, NG</li>
                            <li>Gboko, NG</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4">Legal</h4>
                        <ul class="space-y-2">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>SLA Agreement</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-steel/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-xs text-steel/40 font-mono">© 2025 OmniNile Enterprise. All Systems Operational.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="text-steel/40 hover:text-emerald transition-colors"><span class="sr-only">GitHub</span>GitHub</a>
                    <a href="#" class="text-steel/40 hover:text-emerald transition-colors"><span class="sr-only">LinkedIn</span>LinkedIn</a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;