"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const email = "contact@example.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStacks = [
    { name: "React", bg: "bg-[#70D6FF]" },
    { name: "Next.js", bg: "bg-[#FFD670]" },
    { name: "TypeScript", bg: "bg-[#A3E635]" },
    { name: "Tailwind CSS", bg: "bg-[#FF70A6]" },
    { name: "Git", bg: "bg-[#FF9770]" },
  ];

  const links = [
    {
      title: "GitHub",
      subtitle: "github.com/suzyoh02",
      description: "개인 프로젝트 및 오픈소스 코드 저장소",
      href: "https://github.com",
      bg: "bg-[#70D6FF]", // Sky Blue
      accentBadge: "CODE",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Tech Blog",
      subtitle: "velog.io",
      description: "배운 것을 기록하고 고민을 나눕니다",
      href: "https://velog.io",
      bg: "bg-[#A3E635]", // Lime Green
      accentBadge: "BLOG",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
    },
    {
      title: "Projects",
      subtitle: "Portfolio & Works",
      description: "직접 기획하고 만든 프로젝트 모아보기",
      href: "https://github.com",
      bg: "bg-[#FFD670]", // Butter Yellow
      accentBadge: "WORK",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45"
          />
        </svg>
      ),
    },
    {
      title: "Contact / Email",
      subtitle: email,
      description: "프로젝트 협업 및 커피챗 언제든 환영합니다!",
      href: `mailto:${email}`,
      bg: "bg-[#FF70A6]", // Vivid Pink
      accentBadge: "HELLO",
      isEmail: true,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 selection:bg-[#FFE600] selection:text-black">
      {/* 플로팅 토스트 알림 */}
      {copied && (
        <div className="fixed top-6 z-50 animate-bounce">
          <div className="bg-[#FFE600] text-black font-black text-sm px-5 py-2.5 rounded-xl border-3 border-black shadow-[4px_4px_0px_#000] flex items-center gap-2">
            <span>🎉</span>
            <span>이메일 주소가 복사되었습니다!</span>
          </div>
        </div>
      )}

      <div className="w-full max-w-md flex flex-col items-center">
        {/* 상단 상태 뱃지 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-3 border-black bg-[#A3E635] text-black font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#000] -rotate-1 hover:rotate-0 transition-transform mb-5 cursor-default">
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
          <span>Available For Projects</span>
          <span className="bg-black text-[#A3E635] px-1.5 py-0.5 rounded text-[10px] font-black">
            2026
          </span>
        </div>

        {/* 메인 프로필 카드 */}
        <div className="w-full rounded-3xl border-4 border-black bg-white shadow-[8px_8px_0px_#000] overflow-hidden">
          {/* 레트로 윈도우 타이틀바 */}
          <div className="bg-[#FFD670] border-b-4 border-black px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#FF70A6]" />
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#FFE600]" />
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-[#A3E635]" />
            </div>
            <span className="text-xs font-black tracking-widest text-black uppercase">
              HANBYEOL.DEV ★
            </span>
          </div>

          {/* 프로필 콘텐츠 영역 */}
          <div className="p-6 sm:p-7 flex flex-col items-center text-center">
            {/* 아바타 영역 */}
            <div className="relative mb-5">
              <div className="w-28 h-28 rounded-2xl border-4 border-black bg-[#70D6FF] shadow-[5px_5px_0px_#000] flex items-center justify-center rotate-[-3deg] hover:rotate-0 transition-transform duration-200">
                <span className="text-4xl font-black text-black select-none tracking-tight">
                  별 ✦
                </span>
              </div>
              <div className="absolute -bottom-2 -right-3 bg-[#FF70A6] border-2 border-black rounded-lg px-2 py-0.5 text-[11px] font-black text-black shadow-[2px_2px_0px_#000] rotate-6">
                DEV 💻
              </div>
            </div>

            {/* 이름 */}
            <h1 className="text-3xl font-black text-black tracking-tight mb-2">
              오한별
            </h1>

            {/* 역할 스티커 태그 */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-lg border-2 border-black bg-[#A3E635] text-black font-extrabold text-xs shadow-[2px_2px_0px_#000] -rotate-1 hover:rotate-0 transition-transform">
                💻 Junior Developer
              </span>
              <span className="px-3 py-1 rounded-lg border-2 border-black bg-[#FFD670] text-black font-extrabold text-xs shadow-[2px_2px_0px_#000] rotate-1 hover:rotate-0 transition-transform">
                🌱 Continuous Learner
              </span>
              <span className="px-3 py-1 rounded-lg border-2 border-black bg-[#FF9770] text-black font-extrabold text-xs shadow-[2px_2px_0px_#000] -rotate-2 hover:rotate-0 transition-transform">
                ⚡ Problem Solver
              </span>
            </div>

            {/* 소개글 박스 */}
            <div className="w-full bg-[#FFFDF0] border-3 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000] mb-5 text-left relative">
              <div className="absolute -top-3 left-4 bg-black text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                ABOUT ME
              </div>
              <p className="text-zinc-900 font-bold text-sm leading-relaxed mt-1 break-keep">
                아이디어를 코드로 구현하고 문제 해결을 즐기는 개발자입니다. 더 나은 사용자 경험을 고민하며 매일 한 걸음씩 성장하고 있습니다. 🚀
              </p>
            </div>

            {/* 기술 스택 영역 */}
            <div className="w-full flex flex-col items-start gap-1.5 mb-6">
              <span className="text-[11px] font-black text-zinc-500 uppercase tracking-wider">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5 w-full">
                {techStacks.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2.5 py-1 rounded-md border-2 border-black ${tech.bg} text-black font-black text-xs shadow-[2px_2px_0px_#000] hover:-translate-y-0.5 transition-transform cursor-default`}
                  >
                    #{tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* 링크 버튼 목록 */}
            <div className="w-full flex flex-col gap-3.5">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.isEmail ? undefined : "_blank"}
                  rel={link.isEmail ? undefined : "noopener noreferrer"}
                  className={`group relative flex items-center justify-between w-full p-4 rounded-2xl border-3 border-black ${link.bg} shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 text-black`}
                >
                  <div className="flex items-center gap-3.5 text-left">
                    <div className="p-2 bg-white rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] group-hover:scale-105 transition-transform text-black">
                      {link.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-base tracking-tight">
                          {link.title}
                        </span>
                        <span className="text-[10px] font-black bg-white px-1.5 py-0.5 rounded border border-black uppercase">
                          {link.accentBadge}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-black/80 mt-0.5">
                        {link.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 pl-2">
                    {link.isEmail && (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        title="이메일 주소 복사"
                        className="p-1.5 rounded-lg border-2 border-black bg-white text-black hover:bg-[#FFE600] active:scale-90 transition-all shadow-[2px_2px_0px_#000]"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                          />
                        </svg>
                      </button>
                    )}
                    <div className="w-8 h-8 rounded-xl border-2 border-black bg-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[2px_2px_0px_#000] transition-transform">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 푸터 */}
        <footer className="mt-8 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] text-xs font-black text-black">
            <span>⚡ MADE WITH PASSION</span>
            <span>•</span>
            <span>© 2026 오한별</span>
          </div>
          <p className="text-[11px] font-bold text-zinc-600">
            Keep Building, Keep Learning ✦
          </p>
        </footer>
      </div>
    </main>
  );
}
