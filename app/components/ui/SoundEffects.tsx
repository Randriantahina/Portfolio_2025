'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

const SoundEffects = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  useEffect(() => {
    // Vérifier la préférence sauvegardée
    if (typeof window !== 'undefined') {
      try {
        const savedPreference = localStorage.getItem('soundEnabled');
        if (savedPreference !== null) {
          setIsSoundEnabled(JSON.parse(savedPreference));
        }
      } catch (error) {
        console.warn('Failed to load sound preference:', error);
      }
    }
  }, []);

  const playSound = useCallback(
    (type: 'click' | 'hover' | 'success') => {
      if (!isSoundEnabled || typeof window === 'undefined') return;

      try {
        // Créer des sons synthétiques simples
        const AudioContextClass =
          window.AudioContext ||
          (
            window as typeof window & {
              webkitAudioContext?: typeof AudioContext;
            }
          ).webkitAudioContext;
        if (!AudioContextClass) return;

        const audioContext = new AudioContextClass();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Définir les fréquences pour différents types de sons
        const frequencies = {
          click: 800,
          hover: 600,
          success: 1000,
        };

        oscillator.frequency.setValueAtTime(
          frequencies[type],
          audioContext.currentTime
        );
        oscillator.type = 'sine';

        // Contrôler le volume et la durée
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(
          0.1,
          audioContext.currentTime + 0.01
        );
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          audioContext.currentTime + 0.1
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      } catch (error) {
        console.warn('Audio playback failed:', error);
      }
    },
    [isSoundEnabled]
  );

  const toggleSound = () => {
    const newState = !isSoundEnabled;
    setIsSoundEnabled(newState);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('soundEnabled', JSON.stringify(newState));
      } catch (error) {
        console.warn('Failed to save sound preference:', error);
      }
    }

    if (newState) {
      playSound('success');
    }
  };

  // Ajouter des écouteurs d'événements pour les interactions
  useEffect(() => {
    if (!isSoundEnabled || typeof window === 'undefined') return;

    const handleClick = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement;
        if (target && (target.tagName === 'BUTTON' || target.tagName === 'A')) {
          playSound('click');
        }
      } catch (error) {
        console.warn('Click sound failed:', error);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement;
        if (target && (target.tagName === 'BUTTON' || target.tagName === 'A')) {
          playSound('hover');
        }
      } catch (error) {
        console.warn('Hover sound failed:', error);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('mouseenter', handleMouseEnter, true);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
    };
  }, [isSoundEnabled, playSound]);

  return (
    <motion.button
      onClick={toggleSound}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-8 left-8 z-50 p-3 rounded-full transition-all duration-300 ${
        isSoundEnabled
          ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
          : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
      } backdrop-blur-sm border border-white/10`}
      aria-label={isSoundEnabled ? 'Désactiver les sons' : 'Activer les sons'}
      title={isSoundEnabled ? 'Sons activés' : 'Sons désactivés'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isSoundEnabled ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isSoundEnabled ? <FiVolume2 size={20} /> : <FiVolumeX size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default SoundEffects;
