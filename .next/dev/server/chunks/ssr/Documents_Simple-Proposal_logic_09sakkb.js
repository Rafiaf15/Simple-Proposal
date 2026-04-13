module.exports = [
"[project]/Documents/Simple-Proposal/logic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Simple-Proposal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Simple-Proposal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Simple-Proposal/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [noCount, setNoCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [noPosition, setNoPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const moveNoButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isAnimating) return;
        setIsAnimating(true);
        setNoCount((prev)=>prev + 1);
        const newParticles = Array.from({
            length: 12
        }, (_, i)=>({
                id: Date.now() + i,
                x: 0,
                y: 0,
                vx: (Math.random() - 0.5) * 150,
                vy: (Math.random() - 0.5) * 150,
                life: 100,
                size: Math.random() * 8 + 3,
                color: [
                    "emerald",
                    "cyan",
                    "amber",
                    "rose",
                    "violet"
                ][Math.floor(Math.random() * 5)]
            }));
        setParticles((prev)=>[
                ...prev,
                ...newParticles
            ]);
        const maxX = 100;
        const maxY = 50;
        const x = (Math.random() - 0.5) * maxX * 2;
        const y = (Math.random() - 0.5) * maxY * 2;
        setNoPosition({
            x,
            y
        });
        setTimeout(()=>setIsAnimating(false), 200);
    }, [
        isAnimating
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setParticles((prev)=>prev.map((p)=>({
                        ...p,
                        x: p.x + p.vx * 0.02,
                        y: p.y + p.vy * 0.02,
                        life: p.life - 1,
                        vx: p.vx * 0.97,
                        vy: p.vy * 0.97
                    })).filter((p)=>p.life > 0));
        }, 16);
        return ()=>clearInterval(interval);
    }, []);
    const handleYesClick = ()=>{
        const confetti = Array.from({
            length: 40
        }, (_, i)=>({
                id: Date.now() + i,
                x: Math.random() * 100 + 20,
                y: -10,
                vx: (Math.random() - 0.5) * 120,
                vy: Math.random() * 80 + 40,
                life: 120,
                size: Math.random() * 6 + 3,
                color: [
                    "emerald",
                    "cyan",
                    "lime",
                    "rose",
                    "indigo",
                    "pink"
                ][Math.floor(Math.random() * 6)]
            }));
        setParticles((prev)=>[
                ...prev,
                ...confetti
            ]);
        setTimeout(()=>router.push("/thank-you"), 1500);
    };
    const particleClass = (color)=>{
        if (color === "emerald") return "particle-emerald";
        if (color === "cyan") return "particle-cyan";
        if (color === "amber") return "particle-amber";
        if (color === "rose") return "particle-rose";
        if (color === "violet") return "particle-violet";
        if (color === "lime") return "particle-lime";
        if (color === "indigo") return "particle-indigo";
        if (color === "pink") return "particle-pink";
        return "particle-default";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "proposal-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "proposal-bg-overlay"
            }, void 0, false, {
                fileName: "[project]/Documents/Simple-Proposal/logic.js",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "proposal-bg-glow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glow-left"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glow-right"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Simple-Proposal/logic.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `particle ${particleClass(particle.color)}`,
                    style: {
                        left: `calc(50% + ${particle.x}px)`,
                        top: `calc(50% + ${particle.y}px)`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.life / 120,
                        transform: `translate(-50%, -50%) scale(${particle.life / 120})`
                    }
                }, particle.id, false, {
                    fileName: "[project]/Documents/Simple-Proposal/logic.js",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "proposal-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bubble bubble-top-right"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bubble bubble-bottom-left"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "proposal-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "proposal-eyebrow",
                                children: "My Finesh Girlfriend✨"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Simple-Proposal/logic.js",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "proposal-title",
                                children: "NINA / LILY KOPLING"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Simple-Proposal/logic.js",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "proposal-subtitle",
                                children: "sebenernya bikin ini udah lama, cuman saat itu aku masih ragu dan malu untuk bilang."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Simple-Proposal/logic.js",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "confession-box",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "question-text",
                            children: "Will u be my girlfriend?"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Simple-Proposal/logic.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "button-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleYesClick,
                                className: "btn btn-yes",
                                children: "Yes 💚"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Simple-Proposal/logic.js",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: moveNoButton,
                                disabled: isAnimating,
                                className: "btn btn-no",
                                style: {
                                    transform: `translate3d(${noPosition.x}px, ${noPosition.y}px, 0)`
                                },
                                children: "Belum 😏"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Simple-Proposal/logic.js",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    noCount > 8 && noCount < 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "teaser-text",
                        children: "Eitssss ga kenaaa 😋"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    noCount >= 10 && noCount < 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Simple$2d$Proposal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "teaser-text",
                        children: "masa pilih gamauu 😢"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Simple-Proposal/logic.js",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Simple-Proposal/logic.js",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Simple-Proposal/logic.js",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Simple-Proposal_logic_09sakkb.js.map