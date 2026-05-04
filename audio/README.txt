🎙️ AUDIO — Client Testimonials
================================
Place your client audio testimonial files here.

Supported formats: .mp3  .m4a  .wav  .ogg
Recommended format: .mp3 (best browser compatibility)

Naming convention (match client order in translations):
  youssef.mp3   ← client 1
  sara.mp3      ← client 2
  karim.mp3     ← client 3

Then update src/components/Testimonials.tsx — find the `AudioCard` component
and wire the <audio> element to the real file:

  const audio = new Audio(`/audio/${firstName.toLowerCase()}.mp3`);

Files in this folder are served at:
  /audio/your-file.mp3
