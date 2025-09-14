import React, { useState, useEffect, useRef } from 'react';

const SplashScreen = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const progressBarRef = useRef(null);
    const welcomeTextRef = useRef(null);
    const [welcomeText, setWelcomeText] = useState('');

    useEffect(() => {
        // --- Canvas and Mouse Trail Logic ---
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particlesArray = [];
        const mouse = { x: null, y: null };
        
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasDimensions();

        const handleResize = () => setCanvasDimensions();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
            particlesArray.push({
                x: mouse.x,
                y: mouse.y,
                size: Math.random() * 2 + 0.5,
                opacity: 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5
            });
        };
        window.addEventListener('mousemove', handleMouseMove);

        const updateParticles = () => {
            for (let i = 0; i < particlesArray.length; i++) {
                const p = particlesArray[i];
                p.x += p.speedX;
                p.y += p.speedY;
                p.opacity -= 0.015;
                p.size -= 0.05;

                if (p.opacity < 0.05 || p.size < 0.5) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        };

        const drawParticles = () => {
            for (const p of particlesArray) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.shadowColor = `rgba(255, 215, 0, ${p.opacity})`;
                ctx.shadowBlur = 15;
                ctx.fill();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawParticles();
            updateParticles();
            requestAnimationFrame(animate);
        };
        
        animate();

        // Cleanup function for the canvas animation
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        // --- Progress Bar and Welcome Message Logic ---
        const progressBar = progressBarRef.current;
        const welcomeTextElement = welcomeTextRef.current;
        
        const helloLanguages = [
            "Hello", "Hola", "Bonjour", "你好", "Ciao",
            "Olá", "안녕하세요", "Привет", "こんにちは", "Guten Tag", "नमस्ते"
        ];
        
        let progress = 0;
        const totalSteps = 100;
        let progressInterval;
        let greetingInterval;
        let languageIndex = 0;
        
        // Function to update the progress bar
        const updateProgress = () => {
            if (progress < totalSteps) {
                progress += 1;
                if (progressBar) {
                    progressBar.style.width = `${progress}%`;
                }
            } else {
                clearInterval(progressInterval);
                clearInterval(greetingInterval);
                setWelcomeText("Welcome!");
                setTimeout(() => {
                    if (welcomeTextElement) {
                        welcomeTextElement.style.opacity = 0;
                    }
                    setTimeout(() => {
                        if (onComplete && typeof onComplete === 'function') {
                            onComplete();
                        }
                    }, 1000); // Wait for the fade-out transition to complete
                }, 1500); // Wait before starting fade-out
            }
        };

        // Function to update the greeting text
        const updateGreeting = () => {
            setWelcomeText(helloLanguages[languageIndex]);
            languageIndex = (languageIndex + 1) % helloLanguages.length;
        };

        // Start both intervals
        progressInterval = setInterval(updateProgress, 50);
        greetingInterval = setInterval(updateGreeting, 250);

        // Cleanup function for the intervals
        return () => {
            clearInterval(progressInterval);
            clearInterval(greetingInterval);
        };
    }, [onComplete]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#000000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            zIndex: 9999
        }}>
            <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }}></canvas>
            <div 
                ref={welcomeTextRef}
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '5rem',
                    fontWeight: 'bold',
                    transition: 'opacity 1s ease-in-out',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
                    zIndex: 2,
                    position: 'absolute',
                    color: '#ffffff'
                }}
            >
                {welcomeText}
            </div>
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 3
            }}>
                <div style={{
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'transparent',
                    overflow: 'hidden'
                }}>
                    <div
                        ref={progressBarRef}
                        style={{
                            height: '100%',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 0 15px 8px #ffd700',
                            width: '0%',
                            transition: 'width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
