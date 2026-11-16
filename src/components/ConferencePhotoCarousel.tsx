import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { galleryPhotos } from '@/lib/gallery';

export default function ConferencePhotoCarousel() {
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const section = useRef<HTMLElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const photo = selected === null ? null : galleryPhotos[selected];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  const openPhoto = (index: number, target: HTMLElement) => {
    opener.current = target;
    setSelected(index);
  };
  const step = (amount: number) => setSelected((index) =>
    index === null ? null : (index + amount + galleryPhotos.length) % galleryPhotos.length
  );

  return (
    <section ref={section} id="gallery" aria-label="Conference photo gallery" className="py-6 bg-black overflow-hidden">
      <style>{`
        @keyframes conference-gallery-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .conference-gallery-track {
          display: flex;
          width: max-content;
          animation: conference-gallery-scroll 300s linear infinite;
        }
        .conference-gallery-track:hover,
        .conference-gallery-track:focus-within {
          animation-play-state: paused !important;
        }
        .conference-gallery-photo {
          width: 256px;
          height: 192px;
          flex-shrink: 0;
          background: #101010;
        }
        @media (max-width: 639px) {
          .conference-gallery-photo { width: 224px; height: 168px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .conference-gallery-track { animation: none; }
          .conference-gallery-window { overflow-x: auto; }
        }
      `}</style>
      <div className="max-w-4xl mx-auto px-4 mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-white/75 text-sm">Conference moments <span className="text-white/50">· Tap a photo to enlarge</span></p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={(event) => openPhoto(0, event.currentTarget)}
            className="rounded-full border border-white/25 px-4 py-2 text-xs text-white hover:border-orange-500 focus-visible:outline focus-visible:outline-orange-500"
          >
            Browse all {galleryPhotos.length} photos
          </button>
          <button
            type="button"
            aria-label={paused ? 'Play photo carousel' : 'Pause photo carousel'}
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/25 text-white hover:border-orange-500 focus-visible:outline focus-visible:outline-orange-500"
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
      </div>
      <div className="conference-gallery-window overflow-hidden">
        <div className="conference-gallery-track" style={{ animationPlayState: paused || selected !== null || !inView ? 'paused' : 'running' }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-4 pr-4" aria-hidden={copy === 1 ? true : undefined}>
              {galleryPhotos.map((item, index) => (
                <button
                  key={`${copy}-${item.src}`}
                  type="button"
                  tabIndex={copy === 1 ? -1 : 0}
                  aria-label={`View photo ${index + 1}: ${item.alt}`}
                  onClick={(event) => openPhoto(index, event.currentTarget)}
                  className="conference-gallery-photo rounded-lg overflow-hidden border border-white/10 hover:border-orange-500/60 focus-visible:outline focus-visible:outline-orange-500"
                >
                  <img
                    src={item.thumb}
                    alt={copy === 0 ? item.alt : ''}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent
          className="!z-[60] !max-w-[min(1100px,calc(100%-2rem))] bg-[#101010] border-white/20 text-white p-4 pt-12 sm:p-6 sm:pt-12"
          onCloseAutoFocus={(event) => { event.preventDefault(); opener.current?.focus(); }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
            if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
          }}
        >
          <DialogTitle className="sr-only">Conference photo gallery</DialogTitle>
          <DialogDescription className="sr-only">Use the previous and next buttons or arrow keys to browse. Press Escape to close.</DialogDescription>
          {photo && (
            <>
              <img src={photo.src} alt={photo.alt} className="w-full h-[58vh] sm:h-[65vh] object-contain" />
              <div className="flex items-center justify-between gap-3">
                <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className="p-3 rounded-full border border-white/30 hover:border-orange-500">
                  <ChevronLeft size={20} />
                </button>
                <p className="text-sm text-white/80" aria-live="polite">Photo {(selected ?? 0) + 1} of {galleryPhotos.length}</p>
                <button type="button" aria-label="Next photo" onClick={() => step(1)} className="p-3 rounded-full border border-white/30 hover:border-orange-500">
                  <ChevronRight size={20} />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
