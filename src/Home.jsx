import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Products from "./Products";

const videoList = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
];

const Home = () => {
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [userInterrupted, setUserInterrupted] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const rafIdRef = useRef(null);
  const isPlayingRef = useRef(false); // 🔥 NEW: Track video playing state

  const cancelAutoScroll = () => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  };
  useEffect(() => {
  // Jalankan hanya sekali saat halaman dimuat
  if (currentVideoIndex === -1) {
    console.log("🚀 Scroll ke video pertama & auto play");

    // Scroll ke posisi video pertama agar terlihat di tengah
    setTimeout(() => {
      videoRefs.current[0]?.scrollIntoView({ behavior: "smooth", block: "center" });
      // Setelah 1.5 detik, mainkan video pertama
      setTimeout(() => {
        setIsAutoScrolling(false); // berhenti scroll dulu
        setCurrentVideoIndex(0); // mainkan video pertama
      }, 1500);
    }, 500);
  }
}, []);


  // 🌬️ Auto-scroll ke bawah - FIXED
  useEffect(() => {
    if (userInterrupted) {
      console.log("🚫 Auto-scroll stopped: user interrupted");
      return;
    }

    const scrollSpeed = 1.2;

    const autoScroll = () => {
      // 🔥 FIX: Check if video is playing
      if (!isAutoScrolling || userInterrupted || isPlayingRef.current) {
        console.log("⏸️ Auto-scroll paused:", { isAutoScrolling, userInterrupted, isPlaying: isPlayingRef.current });
        cancelAutoScroll();
        return;
      }

      window.scrollBy(0, scrollSpeed);
      
      // Check if reached bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        console.log("🏁 Reached bottom of page");
        cancelAutoScroll();
        return;
      }
      
      rafIdRef.current = requestAnimationFrame(autoScroll);
    };

    if (isAutoScrolling && !userInterrupted && !isPlayingRef.current) {
      console.log("🔄 Starting auto-scroll");
      cancelAutoScroll();
      rafIdRef.current = requestAnimationFrame(autoScroll);
    }

    return cancelAutoScroll;
  }, [isAutoScrolling, userInterrupted]);

  // 🎯 Observer semua video - FIXED
  useEffect(() => {
    console.log("👀 Setting up Intersection Observer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          const isCentered = entry.intersectionRatio > 0.7; // 🔥 Reduced threshold for better detection

          console.log(`📹 Video ${index + 1}:`, {
            ratio: entry.intersectionRatio.toFixed(2),
            isCentered,
            currentIndex: currentVideoIndex,
            userInterrupted
          });

          if (isCentered && currentVideoIndex !== index && !userInterrupted) {
            console.log(`🎬 Video ${index + 1} centered → stop scroll & play video`);
            setIsAutoScrolling(false);
            setCurrentVideoIndex(index);
            isPlayingRef.current = true; // 🔥 Mark as playing
          }
        });
      },
      { 
        threshold: [0.5, 0.7, 0.9],
        rootMargin: "0px 0px -100px 0px" // 🔥 Adjust trigger point
      }
    );

    videoRefs.current.forEach((video, index) => {
      if (video) {
        console.log(`👁️ Observing video ${index + 1}`);
        observer.observe(video);
      }
    });

    return () => {
      console.log("🧹 Cleaning up Intersection Observer");
      observer.disconnect();
    };
  }, [userInterrupted, currentVideoIndex]);

  // ▶️ Mainkan video yang aktif - FIXED
  useEffect(() => {
    if (currentVideoIndex < 0) {
      console.log("⏭️ No active video to play");
      return;
    }

    const video = videoRefs.current[currentVideoIndex];
    if (!video) {
      console.warn(`❌ Video element at index ${currentVideoIndex} not found`);
      return;
    }

    console.log(`🎯 Playing video ${currentVideoIndex + 1}`);
    
    // Atur mute: pertama kali unmute, setelahnya mute
    video.muted = hasPlayedOnce;
    video.currentTime = 0; // 🔥 Reset to beginning

    const playVideo = async () => {
      try {
        await video.play();
        video.classList.add("opacity-100");
        console.log(`✅ Video ${currentVideoIndex + 1} started playing`);
      } catch (error) {
        console.warn(`❌ Failed to play video ${currentVideoIndex + 1}:`, error);
        // Jika gagal play, lanjutkan scroll
        handleVideoEnd();
      }
    };

    const handleVideoEnd = () => {
      console.log(`🎞️ Video ${currentVideoIndex + 1} ended → resume scroll`);
      isPlayingRef.current = false; // 🔥 Mark as not playing
      setHasPlayedOnce(true);
      setCurrentVideoIndex(-1); // 🔥 Reset current video

      // Lanjut auto-scroll setelah delay kecil
      setTimeout(() => {
        if (!userInterrupted) {
          console.log("🔄 Resuming auto-scroll after video end");
          setIsAutoScrolling(true);
        }
      }, 1000); // 🔥 Increased delay for better UX
    };

    video.addEventListener("ended", handleVideoEnd);
    playVideo();

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideoIndex, hasPlayedOnce, userInterrupted]);

  // 🧠 User interaksi → hentikan auto scroll - FIXED
  useEffect(() => {
    const stopAutoScroll = (event) => {
      console.log("🛑 User interaction detected:", event.type);
      setUserInterrupted(true);
      setIsAutoScrolling(false);
      cancelAutoScroll();
      
      // 🔥 Also pause currently playing video
      if (currentVideoIndex >= 0) {
        const video = videoRefs.current[currentVideoIndex];
        if (video && !video.paused) {
          video.pause();
          console.log(`⏸️ Paused video ${currentVideoIndex + 1} due to user interaction`);
        }
      }
    };

    const stopEvents = ["wheel", "touchmove", "keydown", "mousedown", "scroll"]; // 🔥 Added scroll event
    
    stopEvents.forEach((event) =>
      window.addEventListener(event, stopAutoScroll, { 
        passive: true 
        // 🔥 Removed 'once: true' to catch all interactions
      })
    );

    return () => {
      stopEvents.forEach((event) =>
        window.removeEventListener(event, stopAutoScroll)
      );
    };
  }, [currentVideoIndex]); // 🔥 Added dependency

  return (
    <div className="bg-white text-gray-800">
      {/* 🔥 Debug Info (optional) */}
      <HeroSection />

      {/* 🎥 Video Sections dengan lebih banyak spacing */}
      <div className="space-y-40 py-20 bg-gray-50"> {/* 🔥 Increased spacing */}
        {videoList.map((src, index) => (
          <section
            key={index}
            className="flex justify-center px-4 sm:px-12 transition-all duration-700"
            style={{ minHeight: "100vh" }} // 🔥 Ensure each section takes full viewport
          >
            <div className="max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform">
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                  // Add data attribute for easier debugging
                  if (el) el.setAttribute('data-video-index', index);
                }}
                data-index={index}
                className="w-full h-[70vh] object-cover rounded-3xl opacity-90 transition-opacity duration-700"
                preload="auto"
                playsInline
                controls
                onPlay={() => {
                  // Jika user memainkan video manual, hentikan auto-scroll
                  if (!userInterrupted) {
                    setUserInterrupted(true);
                    setIsAutoScrolling(false);
                  }
                }}
              >
                <source src={src} type="video/mp4" />
                Browser Anda tidak mendukung video tag.
              </video>
              {/* 🔥 Video label for debugging */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                Video {index + 1}
              </div>
            </div>
          </section>
        ))}
      </div>

      <Products />
      <FeaturesSection />
      
    </div>
  );
};

export default Home;