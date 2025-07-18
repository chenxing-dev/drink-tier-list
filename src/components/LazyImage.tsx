// src/components/LazyImage.tsx
import { useState, useRef, useEffect } from 'preact/hooks';

export default function LazyImage({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                        if (imgRef.current) {
                            imgRef.current.src = src;
                            setLoaded(true);
                        }
                    };
                    observer.disconnect();
                }
            });
        });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [src]);

    return (
        <img
            ref={imgRef}
            src=""
            alt={alt}
            className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
        />
    );
}