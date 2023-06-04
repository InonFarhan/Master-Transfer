const svgs = {
    add: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" viewBox="0 96 960 960"><path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"/></svg>`,
    arrow_back: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" height="48" viewBox="0 96 960 960" width="48"><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>`,
    home: `<svg xmlns="http://www.w3.org/2000/svg" fill="#0e0e0e" height="48" viewBox="0 96 960 960" width="48"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"/></svg>`,
    contacts: `<svg xmlns="http://www.w3.org/2000/svg" fill="#0e0e0e" height="48" viewBox="0 96 960 960" width="48"><path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z"/></svg>`,
    lightHome: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" height="48" viewBox="0 96 960 960" width="48"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"/></svg>`,
    lightContacts: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" height="48" viewBox="0 96 960 960" width="48"><path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z"/></svg>`,
    delete: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" height="48" viewBox="0 96 960 960" width="48"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>`,
    dollar: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" height="48" viewBox="0 96 960 960" width="48"><path d="M451 936v-84q-57-10-93.5-43.5T305 724l56-23q17 48 49 71.5t77 23.5q48 0 79-24t31-66q0-44-27.5-68T466 589q-72-23-107.5-61T323 433q0-55 35.5-92t92.5-42v-83h60v83q45 5 77.5 29.5T638 391l-56 24q-14-32-37.5-46.5T483 354q-46 0-73 21t-27 57q0 38 30 61.5T524 542q68 21 100.5 60.5T657 702q0 63-37 101.5T511 853v83h-60Z"/></svg>`,
    setting: `<svg xmlns="http://www.w3.org/2000/svg" fill="#0e0e0e" height="48" viewBox="0 -960 960 960" width="48"><path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410-480q0-29 20.5-49.5T480-550q29 0 49.5 20.5T550-480q0 29-20.5 49.5T480-410Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z"/></svg>`,
    lightSetting: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" height="48" viewBox="0 -960 960 960" width="48"><path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410-480q0-29 20.5-49.5T480-550q29 0 49.5 20.5T550-480q0 29-20.5 49.5T480-410Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z"/></svg>`,
    logo: `<svg id="Layer_1" fill="#fbfbfb" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 67.85"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>money-transfer</title><path class="cls-1" d="M58.41,61.48A29,29,0,0,1,31.93,35.83c-1.52.5-3.06,1.09-4.62,1.75l2.52,12.47L0,30H0L19.72,0l2.57,12.71a44.08,44.08,0,0,1,16.89.46,28.93,28.93,0,0,1,18-9.41,26.48,26.48,0,0,1,3.58-.22A33.12,33.12,0,0,1,68,4.45a29,29,0,0,1,21.8,27.94,56.84,56.84,0,0,0,5.79-2.13L93.05,17.8l29.83,20h0l-19.72,30-2.57-12.72A42.92,42.92,0,0,1,80.53,53.8a29,29,0,0,1-12.46,6.85,30.72,30.72,0,0,1-9.66.83ZM63.57,39.1a3.84,3.84,0,0,0-.3-1.6,2.74,2.74,0,0,0-.94-1.08,9.28,9.28,0,0,0-1.72-.9,48.55,48.55,0,0,1-4.49-2.19,8.75,8.75,0,0,1-3-2.74A7.48,7.48,0,0,1,52,26.3a7.27,7.27,0,0,1,1.19-4.14,7.81,7.81,0,0,1,3.27-2.74,10.72,10.72,0,0,1,3.54-.9v-3.1h3.17V18.6a9.57,9.57,0,0,1,3,.94,8,8,0,0,1,3.29,3.09,9.37,9.37,0,0,1,1.19,4.83H63.74A4,4,0,0,0,63,24.61a2.48,2.48,0,0,0-1.84-.78,2.32,2.32,0,0,0-1.33.35,2,2,0,0,0-.75.94,3.22,3.22,0,0,0-.24,1.26,2.83,2.83,0,0,0,.28,1.3,2.94,2.94,0,0,0,.92,1,10.74,10.74,0,0,0,1.8,1A41,41,0,0,1,66.21,32a9.3,9.3,0,0,1,3.08,2.8,7.46,7.46,0,0,1,1.13,4.28A7.13,7.13,0,0,1,66,46a11.06,11.06,0,0,1-3.27.84v3H59.54v-3a14.52,14.52,0,0,1-2-.39,9.92,9.92,0,0,1-3.29-1.58,7.72,7.72,0,0,1-2.37-2.92,10,10,0,0,1-.9-4.48h6.84a5.79,5.79,0,0,0,.28,1.95,3.24,3.24,0,0,0,.74,1.25,2.69,2.69,0,0,0,1.07.67,3.66,3.66,0,0,0,1.28.21,2.64,2.64,0,0,0,1.4-.33,2,2,0,0,0,.78-.89,3,3,0,0,0,.25-1.21ZM63.2,56.69h0l-.58.05c-.63,0-1.26.07-1.9.07A24.21,24.21,0,0,1,49.73,11h0l.5-.25a24.21,24.21,0,1,1,13,45.9Z"/></svg>`,
    logout: `<svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" height="28"  width="28" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z"/></svg>`,
    send: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" viewBox="0 -960 960 960"><path d="M120-160v-640l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0v-457 457Z"/></svg>`,
    autumn: `<svg xmlns="http://www.w3.org/2000/svg" fill="#7999f0c2" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-730v-79.577Q480-843 503.5-866.5t56.923-23.5H640v79.577Q640-777 616.5-753.5T559.577-730H480ZM200-490q-49.714 0-84.857-35.143T80-610v-120h120q49.714 0 84.857 35.143T320-610v120H200ZM640-90q-41.525 0-79.324-13.6Q522.878-117.2 492-141l-31 31q-8.067 9-20.533 9Q428-101 420-110q-9-8.067-9-20.533Q411-143 420-151l31-31q-23.8-30.878-37.4-68.676Q400-288.475 400-330q0-100 70-170.5T640-570h239v240q2 100-68.5 170T640-90Zm0-60q75 0 127-53t52-128v-179H641q-75 0-128 52.547Q460-404.907 460-330q0 29.469 9 55.734Q478-248 494-225l126-126q8.067-9 20.533-9Q653-360 661-351q9 8.067 9 20.533Q670-318 661-310L535-184q23 16 49.266 25 26.265 9 55.734 9Zm0-180Z"/></svg>`,
    winter: `<svg xmlns="http://www.w3.org/2000/svg" fill="#3a6effc2" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-80v-195L301-126l-43-42 192-192v-90h-90L172-262l-44-41 147-147H80v-60h195L125-660l43-43 192 193h90v-91L262-789l42-44 146 147v-194h60v194l150-150 42 43-192 192v91h91l189-189 43 42-147 147h194v60H686l148 149-41 43-192-192h-91v90l192 193-41 43-151-151v195h-60Z"/></svg>`,
    spring: `<svg xmlns="http://www.w3.org/2000/svg" fill="#9df079c2" height="48" viewBox="0 -960 960 960" width="48"><path d="M479-80q-56 0-97.5-38.5T331-220q-59 23-110.5 4T140-283q-29-48-19-105t68-92q-60-36-69-92.5T140-677q29-48 80.5-67t110.5 4q9-63 50.5-101.5T479-880q56 0 97.5 38.5T627-740q59-23 110.5-4t80.5 67q29 48 20 104.5T769-480q58 35 67.5 92.5T818-283q-29 48-80.5 67T627-220q-9 63-50.5 101.5T479-80Zm0-60q51 0 73.5-42.5T551-265l-32-53q-11 3-21 4t-19 1q-9 0-19-1t-21-4l-32 53q-24 40-1.5 82.5T479-140ZM192-313q26 44 69.5 47t74.5-40l32-45q-6-6-14.5-16T339-387q-6-10-11-22.5t-8-28.5h-61q-47 0-70 40.5t3 84.5Zm429 7q30 44 74.5 40.5T766-313q26-44 3-84.5T699-438h-61q-3 16-8 28.5T620-387q-5 10-12.5 19T590-351l31 45ZM481-480Zm-161-42 8-24q4-12 11-23t14-21.5q7-10.5 15-18.5l-31-44q-31-44-76-41.5T192-647q-27 45-3.5 85t70.5 40h61Zm379 0q47 0 69.5-41.5T766-647q-26-44-69.5-46.5T621-653l-31 44q8 6 15 17t14 23q7 12 11.5 22.5T638-522h61ZM439-642q11-2 21-3.5t19-1.5q9 0 19 1.5t21 3.5l32-53q24-41 1.5-83T479-820q-51 0-73.5 42t1.5 83l32 53Zm0 0q11-2 21-3.5t19-1.5q9 0 19 1.5t21 3.5q-11-2-21-3.5t-19-1.5q-9 0-19 1.5t-21 3.5ZM339-387q-6-10-11-22.5t-8-28.5q3 16 8 28.5t11 22.5q6 10 14.5 20t14.5 16q-6-6-14.5-16T339-387Zm-19-135 8-24q4-12 11-23t14-21.5q7-10.5 15-18.5-8 8-15 18.5T339-569q-7 11-11 23l-8 24Zm159 209q-9 0-19-1t-21-4q11 3 21 4t19 1q9 0 19-1t21-4q-11 3-21 4t-19 1Zm111-38q10-8 17.5-17t12.5-19q5-10 10-22.5t8-28.5q-3 16-8 28.5T620-387q-5 10-12.5 19T590-351Zm48-171q-3-14-7.5-24.5T619-569q-7-12-14-23t-15-17q8 6 15 17t14 23q7 12 11.5 22.5T638-522ZM480-373q44 0 75.5-31.5T587-480q0-44-31.5-75.5T480-587q-44 0-75.5 31.5T373-480q0 44 31.5 75.5T480-373Zm0-107Z"/></svg>`,
    summer: `<svg xmlns="http://www.w3.org/2000/svg" fill="#f7f433c2" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-770v-150h60v150h-60Zm256 106-42-42 106-107 42 43-106 106Zm64 214v-60h150v60H770ZM450-40v-150h60v150h-60ZM253-665 148-770l42-42 106 106-43 41Zm518 517L664-254l41-41 108 104-42 43ZM40-450v-60h150v60H40Zm151 302-43-42 105-105 22 20 22 21-106 106Zm289-92q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-60q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-180Z"/></svg>`,
    edit: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fbfbfb" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>`,
}

export function getSvg(iconName) {
    return svgs[iconName]
}