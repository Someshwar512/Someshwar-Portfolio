// src/components/HeroSection/HeroStyle.js
import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 7vw 4rem;
  background: radial-gradient(circle at top, #1f2937 0%, #020617 55%, #000 100%);
  overflow: hidden;
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const HeroLeftContainer = styled.div`
  flex: 1 1 420px;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const HeroRightContainer = styled.div`
  flex: 1 1 360px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  color: #f9fafb;
  letter-spacing: 0.02em;

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

export const TextLoop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  font-size: 1.4rem;
  color: #e5e7eb;
`;

export const Span = styled.span`
  margin-left: 0.4rem;
  color: #38bdf8;
  font-weight: 600;
`;

export const SubTitle = styled.p`
  max-width: 520px;
  font-size: 1rem;
  line-height: 1.6;
  color: #9ca3af;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.9rem;
  margin-top: 0.4rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #f97316, #fb923c);
  color: #0b1120;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 16px 40px rgba(248, 113, 113, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 55px rgba(248, 113, 113, 0.6);
    opacity: 0.95;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.6);
  }
`;

export const SocialMediaIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.9rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const SocialMediaIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #e5e7eb;
  backdrop-filter: blur(10px);
  background: radial-gradient(circle at top left, rgba(148, 163, 184, 0.2), rgba(15, 23, 42, 0.95));
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #38bdf8;
    color: #38bdf8;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.8);
  }

  i {
    font-size: 1.1rem;
  }
`;

/* KEY PART: stylish non-circle image */
export const Img = styled.img`
  width: 100%;
  max-width: 360px;
  height: auto;
  object-fit: cover;
  border-radius: 22px; /* not circle, just smooth corners */
  border: 2px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.9);
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(56, 189, 248, 0.7);
    box-shadow: 0 32px 90px rgba(15, 23, 42, 1);
  }

  @media (max-width: 600px) {
    max-width: 280px;
  }
`;
