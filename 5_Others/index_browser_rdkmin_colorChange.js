var jsPsychRdk = function (e) {
    "use strict";
    const t = {
        name: "rdk",
        parameters: {
            choices: {
                type: e.ParameterType.KEYS,
                pretty_name: "Choices",
                default: "ALL_KEYS"
            },
            correct_choice: {
                type: e.ParameterType.KEYS,
                pretty_name: "Correct choice",
                default: void 0
            },
            trial_duration: {
                type: e.ParameterType.INT,
                pretty_name: "Trial duration",
                default: 500
            },
            response_ends_trial: {
                type: e.ParameterType.BOOL,
                pretty_name: "Response ends trial",
                default:!0
            },
            number_of_apertures: {
                type: e.ParameterType.INT,
                pretty_name: "Number of apertures",
                default: 1
            },
            number_of_dots: {
                type: e.ParameterType.INT,
                pretty_name: "Number of dots",
                default: 300
            },
            number_of_sets: {
                type: e.ParameterType.INT,
                pretty_name: "Number of sets",
                default: 1
            },
            coherent_direction: {
                type: e.ParameterType.INT,
                pretty_name: "Coherent direction",
                default: 0
            },
            coherence: {
                type: e.ParameterType.FLOAT,
                pretty_name: "Coherence",
                default:.5
            },
            opposite_coherence: {
                type: e.ParameterType.FLOAT,
                pretty_name: "Opposite coherence",
                default: 0
            },
            dot_radius: {
                type: e.ParameterType.INT,
                pretty_name: "Dot radius",
                default: 2
            },
            dot_side_length: {
                type: e.ParameterType.INT,
                pretty_name: "Dot side length",
                default: 1
            },
            dot_life: {
                type: e.ParameterType.INT,
                pretty_name: "Dot life",
                default: -1
            },
            move_distance: {
                type: e.ParameterType.INT,
                pretty_name: "Move distance",
                default: 1
            },
            aperture_width: {
                type: e.ParameterType.INT,
                pretty_name: "Aperture width",
                default: 600
            },
            aperture_height: {
                type: e.ParameterType.INT,
                pretty_name: "Aperture height",
                default: 400
            },
            dot_color: {
                type: e.ParameterType.STRING,
                pretty_name: "Dot color",
                default: "white"
            },
            dot_shape: {
                type: e.ParameterType.STRING,
                pretty_name: "Dot shape",
                default: "circle"
            },
            background_color: {
                type: e.ParameterType.STRING,
                pretty_name: "Background color",
                default: "gray"
            },
            RDK_type: {
                type: e.ParameterType.INT,
                pretty_name: "RDK type",
                default: 3
            },
            aperture_type: {
                type: e.ParameterType.INT,
                pretty_name: "Aperture Type",
                default: 2
            },
            reinsert_type: {
                type: e.ParameterType.INT,
                pretty_name: "Reinsert type",
                default: 2
            },
            aperture_center_x: {
                type: e.ParameterType.INT,
                pretty_name: "Aperture center X",
                default: 600
            },
            aperture_center_y: {
                type: e.ParameterType.INT,
                pretty_name: "Aperture center Y",
                default: 400
            },
            fixation_cross: {
                type: e.ParameterType.BOOL,
                pretty_name: "Fixation cross",
                default:!1
            },
            fixation_cross_width: {
                type: e.ParameterType.INT,
                pretty_name: "Fixation cross width",
                default: 20
            },
            fixation_cross_height: {
                type: e.ParameterType.INT,
                pretty_name: "Fixation cross height",
                default: 20
            },
            fixation_cross_color: {
                type: e.ParameterType.STRING,
                pretty_name: "Fixation cross color",
                default: "black"
            },
            fixation_cross_thickness: {
                type: e.ParameterType.INT,
                pretty_name: "Fixation cross thickness",
                default: 1
            },
            border: {
                type: e.ParameterType.BOOL,
                pretty_name: "Border",
                default:!1
            },
            border_thickness: {
                type: e.ParameterType.INT,
                pretty_name: "Border width",
                default: 1
            },
            border_color: {
                type: e.ParameterType.STRING,
                pretty_name: "Border Color",
                default: 1
            }
        }
    };

    function At(e, t) {
        return void 0!== e? e : t;
    };

    class r {
        constructor(e) {
            this.jsPsych = e;
            this.initialDotColor = At(t.dot_color, "white");
            this.shouldChangeColor = false;
            this.changeColorTimer = null;
        }

        trial(e, t) {
            var r = At(t.choices, []),
                o = At(t.correct_choice, void 0),
                a = At(t.trial_duration, 500),
                n = At(t.response_ends_trial,!0),
                i = At(t.number_of_apertures, 1),
                s = At(t.number_of_dots, 300),
                p = At(t.number_of_sets, 1),
                c = At(t.coherent_direction, 0),
                y = At(t.coherence,.5),
                d = At(t.opposite_coherence, 0),
                u = At(t.dot_radius, 2),
                l = At(t.dot_side_length, 1),
                h = At(t.dot_life, -1),
                _ = At(t.move_distance, 1),
                m = At(t.aperture_width, 600),
                f = At(t.aperture_height, 400),
                T = At(t.dot_color, "white"),
                v = At(t.dot_shape, "circle"),
                M = At(t.background_color, "gray"),
                x = At(t.RDK_type, 3),
                g = At(t.aperture_type, 2),
                P = At(t.reinsert_type, 2),
                w = At(t.aperture_center_x, 600),
                b = At(t.aperture_center_y, 400),
                k = At(t.fixation_cross,!1),
                I = At(t.fixation_cross_width, 20),
                N = At(t.fixation_cross_height, 20),
                A = At(t.fixation_cross_color, "black"),
                R = At(t.fixation_cross_thickness, 1),
                C = At(t.border,!1),
                S = At(t.border_thickness, 1),
                Y = At(t.border_color, "black");
            1!== U && 3!== U || (f = m);
            var K = i,
                D = s,
                F = p,
                O = c,
                X = (y = y, d),
                q = u,
                E = l,
                j = h,
                B = _,
                L = m,
                W = f,
                G = T,
                H = M,
                z = w,
                J = b,
                Q = x,
                U = g,
                V = v,
                Z = P,
                $ = k,
                ee = I,
                te = N,
                re = A,
                oe = R,
                ae = (C = C, S),
                ne = Y,
                ie = document.createElement("canvas");
            e.appendChild(ie);
            var se = document.getElementsByClassName("jspsych-display-element")[0],
                pe = se.style.margin,
                ce = se.style.padding,
                ye = se.style.backgroundColor;
            se.style.margin = "auto";
            se.style.padding = "0";
            se.style.backgroundColor = H;
            ie.style.margin = "auto";
            ie.style.padding = "0";
            ie.style.position = "relative";
            ie.style.top = "0";
            ie.style.left = "0";
            var de,
                ue = ie.getContext("2d"),
                le = ie.width = 1200,
                he = ie.height = 800;
            ie.style.backgroundColor = H;
            var _e,
                me,
                fe,
                Te,
                ve,
                Me,
                xe,
                ge,
                Pe,
                we,
                be,
                ke,
                Ie,
                Ne,
                Ae,
                Re,
                Ce,
                Se,
                Ye,
                Ke,
                De,
                Fe,
                Oe,
                Xe,
                qe,
                Ee,
                je = [];
            var Be,
                Le,
                We,
                Ge,
                He,
                ze,
                Je,
                Qe;
            (() => {
                for (
                    _e = ut(D),
                    me = ut(F),
                    fe = ut(O),
                    Te = ut(y),
                    ve = ut(X),
                    Me = ut(q),
                    xe = ut(E),
                    ge = ut(j),
                    Pe = ut(B),
                    we = ut(L),
                    be = ut(W),
                    ke = ut(G),
                    Ie = ut(V),
                    Ne = ut(z),
                    Ae = ut(J),
                    Re = ut(Q),
                    Ce = ut(U),
                    Se = ut(Z),
                    Ye = ut($),
                    Ke = ut(ee),
                    De = ut(te),
                    Fe = ut(re),
                    Oe = ut(oe),
                    Xe = ut(C),
                    qe = ut(ae),
                    Ee = ut(ne),
                    Qe = ut(0),
                    de = 0;
                    de < K;
                    de++
                ) {
                    lt(de);
                    je.push(ht());
                }
            })();
            var Ue, Ve, Ze =!1, $e =!1, et = { rt: -1, key: "" };
            var tt = [],
                rt = 0;
            const ot = 2 * Math.PI;
            // 设置定时器，150ms 后改变颜色标志
            this.changeColorTimer = setTimeout(() => {
                this.shouldChangeColor = true;
            }, 150);
            const at = (e, t, r) => {
                ue.arc(e, t, r, 0, ot);
            };
            const nt = (e, t, r) => {
                const o = 2 * r;
                ue.rect(e - r, t - r, o, o);
            };
            const it = () => {
                "NO_KEYS"!== r &&
                    (Ve = this.jsPsych.pluginAPI.getKeyboardResponse({
                        callback_function: yt,
                        valid_responses: r,
                        rt_method: "performance",
                        persist:!1,
                        allow_held_key:!1
                    }));
            };
            const st = () => {
                Ze =!0;
                rt = tt.length;
                var t = tt;
                tt = rt > 0? tt.reduce(((e, t) => e + t)) / rt : 0;
                void 0!== Ve && this.jsPsych.pluginAPI.cancelKeyboardResponse(Ve);
                var K = {
                    rt: et.rt,
                    response: et.key,
                    correct: dt(),
                    choices: r,
                    correct_choice: o,
                    trial_duration: a,
                    response_ends_trial: n,
                    number_of_apertures: i,
                    number_of_dots: s,
                    number_of_sets: p,
                    coherent_direction: c,
                    coherence: y,
                    opposite_coherence: d,
                    dot_radius: u,
                    dot_side_length: l,
                    dot_life: h,
                    move_distance: _,
                    aperture_width: m,
                    aperture_height: f,
                    dot_color: T,
                    dot_shape: v,
                    background_color: M,
                    RDK_type: x,
                    aperture_type: g,
                    reinsert_type: P,
                    frame_rate: tt,
                    frame_rate_array: t,
                    number_of_frames: rt,
                    aperture_center_x: w,
                    aperture_center_y: b,
                    fixation_cross: k,
                    fixation_cross_width: I,
                    fixation_cross_height: N,
                    fixation_cross_color: A,
                    fixation_cross_thickness: R,
                    border: C,
                    border_thickness: S,
                    border_color: Y,
                    canvas_width: le,
                    canvas_height: he
                };
                e.innerHTML = "";
                se.style.margin = pe;
                se.style.padding = ce;
                se.style.backgroundColor = ye;
                this.jsPsych.finishTrial(K);
            };
            var pt, ct;
            function yt(e) {
                "" == et.key && (et = e);
                n && (window.clearTimeout(Ue), st());
            }
            ct = window.requestAnimationFrame((function e() {
                if (Ze) window.cancelAnimationFrame(ct);
                else if (
                    (ct = window.requestAnimationFrame(e),
                   !$e &&
                        a > 0 &&
                        (Ue = window.setTimeout(st, a), $e =!0),
                    function () {
                        for (ue.clearRect(0, 0, ie.width, ie.height), de = 0; de < K; de++) lt(de), ft();
                        for (de = 0; de < K; de++) lt(de), mt();
                       !0 === $ &&
                            (ue.beginPath(),
                            ue.lineWidth = oe,
                            ue.moveTo(le / 2 - ee, he / 2),
                            ue.lineTo(le / 2 + ee, he / 2),
                            ue.moveTo(le / 2, he / 2 - te),
                            ue.lineTo(le / 2, he / 2 + te),
                            ue.strokeStyle = re,
                            ue.stroke());
                    }(),
                    void 0 === pt)
                )
                    pt = performance.now();
                else {
                    var t = performance.now();
                    tt.push(Math.round(t - pt));
                    pt = t;
                }
            }));
            it();

            const dt = () =>
                void 0!== o &&
                o.constructor === Array
                   ? "string" === typeof o[0] || o[0] instanceof String
                       ? o.every((e => this.jsPsych.pluginAPI.compareKeys(e, et.key)))
                        : (o[0], console.error("Error in RDK plugin: elements in the correct_choice array must be key characters (strings)."),!1)
                    : (console.error("Error in RDK plugin: you must specify an array of key characters for the correct_choice parameter."),!1);
            function ut(e) {
                if (e.constructor === Array && e.length === K) return e;
                if (e.constructor!== Array) {
                    for (var t = [], r = 0; r < K; r++) t.push(e);
                    return t;
                }
                e.constructor === Array && e.length!== K
                   ? console.error(
                          "If you have more than one aperture, please ensure that arrays that are passed in as parameters are the same length as the number of apertures. Else you can use a single value without the array"
                      )
                    : console.error(
                          "A parameter is incorrectly set. Please ensure that the nApertures parameter is set to the correct value (if using more than one aperture), and all others parameters are set correctly."
                      );
            }
            function lt(e) {
                D = _e[e];
                F = me[e];
                O = fe[e];
                y = Te[e];
                X = ve[e];
                q = Me[e];
                E = xe[e];
                j = ge[e];
                B = Pe[e];
                L = we[e];
                W = be[e];
                G = ke[e];
                V = Ie[e];
                z = Ne[e];
                J = Ae[e];
                Q = Re[e];
                U = Ce[e];
                Z = Se[e];
                $ = Ye[e];
                ee = Ke[e];
                te = De[e];
                re = Fe[e];
                oe = Oe[e];
                C = Xe[e];
                ae = qe[e];
                ne = Ee[e];
                We = function (e) {
                    var t = e * Math.PI / 180;
                    return B * Math.cos(t);
                }(O);
                Ge = function (e) {
                    var t = -e * Math.PI / 180;
                    return B * Math.sin(t);
                }(O);
                1 === U || 3 === U? (Be = Le = L / 2) : 2!== U && 4!==U||(Be=L/2,Le=W/2);
                He=D*y;
                ze=D*X;
                Je=0!==je.length?je[e]:void 0;
                }
                function ht(){
                    for(var e=[],t=0;t<F;t++){
                        e.push(_t());
                    }
                    return e;
                }
                function _t(){
                    for(var e=[],t=0;t<D;t++){
                        var r={
                            x:0,y:0,vx:0,vy:0,vx2:0,vy2:0,latestXMove:0,latestYMove:0,lifeCount:Math.floor(Nt(0,j)),updateType:""
                        };
                        r=It(r);
                        1===Q&&(t<He?(r=Mt(r)).updateType="constant direction":t>=He&&t<He+ze?(r=Mt(r)).updateType="opposite direction":r.updateType="random position");
                        2===Q&&(t<He?(r=Mt(r)).updateType="constant direction":t>=He&&t<He+ze?(r=Mt(r)).updateType="opposite direction":r.updateType="random walk");
                        3===Q&&(t<He?(r=Mt(r)).updateType="constant direction":t>=He&&t<He+ze?(r=Mt(r)).updateType="opposite direction":(xt(r),r.updateType="random direction"));
                        4===Q&&((r=Mt(r)).updateType="constant direction or opposite direction or random position");
                        5===Q&&((r=Mt(r)).updateType="constant direction or opposite direction or random walk");
                        6===Q&&(xt(r=Mt(r)),r.updateType="constant direction or opposite direction or random direction");
                        e.push(r);
                    }
                    return e;
                }

                function mt () {
                const e = Je[Qe[de]];
                let t, r;
                "square" === V? (t = nt, r =.5 * E) : (t = at, r = q);
                // 根据标志变量改变颜色
                if (this.shouldChangeColor) {
                    ue.fillStyle = "grey";
                } else {
                    ue.fillStyle = G;
                }
                ue.beginPath();
                for (let o = 0; o < D; o++) {
                    const a = e[o];
                    ue.moveTo(a.x + r, a.y), t(a.x, a.y, r);
                }
                ue.fill();
               !0 === C &&
                    (1!== U && 2!== U ||
                        (ue.lineWidth = ae,
                        ue.strokeStyle = ne,
                        ue.beginPath(),
                        ue.ellipse(z, J, Be + ae / 2, Le + ae / 2, 0, 0, ot),
                        ue.stroke()),
                    3!== U && 4!== U ||
                        (ue.lineWidth = ae,
                        ue.strokeStyle = ne,
                        ue.strokeRect(z - Be - ae / 2, J - Le - ae / 2, 2 * Be + ae, 2 * Le + ae)));
                }
                mt.bind(this);

            function ft(e){
                Qe[de]==F-1?Qe[de]=0:Qe[de]=Qe[de]+1;
                for(var e=Je[Qe[de]],t=0;t<D;t++){
                    var r=e[t],o=Math.random();
                    if("constant direction"===r.updateType?r=gt(r):"opposite direction"===r.updateType?r=Pt(r):"random position"===r.updateType?r=It(r):"random walk"===r.updateType?r=wt(r):"random direction"===r.updateType?r=bt(r):"constant direction or opposite direction or random position"===r.updateType?r=o<y?gt(r):o>=y&&o<y+X?Pt(r):It(r):"constant direction or opposite direction or random walk"===r.updateType?r=o<y?gt(r):o>=y&&o<y+X?Pt(r):wt(r):"constant direction or opposite direction or random direction"===r.updateType&&(r=o<y?gt(r):o>=y&&o<y+X?Pt(r):bt(r)),r.lifeCount++,Tt(r)&&(r=It(r)),vt(r));
                    switch(Z){
                        case 1:r=It(r);break;
                        case 2:r=kt(r);
                    }
                }
            }
            function Tt(e){
                return j<0?(e.lifeCount=0,!1):e.lifeCount>=j&&(e.lifeCount=0,!0);
            }
            function vt(e){
                return 1===U||2===U?e.x<(r=e.y,r-=J,-Be*Math.sqrt(1-Math.pow(r,2)/Math.pow(Le,2))+z)||e.x>function(e){return e-=J,Be*Math.sqrt(1-Math.pow(e,2)/Math.pow(Le,2))+z}(e.y)||e.y<(t=e.x,t-=z,-Le*Math.sqrt(1-Math.pow(t,2)/Math.pow(Be,2))+J)||e.y>function(e){return e-=z,Le*Math.sqrt(1-Math.pow(e,2)/Math.pow(Be,2))+J}(e.x):3===U||4===U?e.x<z-Be||e.x>z+Be||e.y<J-Le||e.y>J+Le:void 0;
                var t,r;
            }
            function Mt(e){
                return e.vx=We,e.vy=Ge,e;
            }
            function xt(e){
                var t=Nt(-Math.PI,Math.PI);
                return e.vx2=Math.cos(t)*B,e.vy2=-Math.sin(t)*B,e;
            }
            function gt(e){
                return e.x+=e.vx,e.y+=e.vy,e.latestXMove=e.vx,e.latestYMove=e.vy,e;
            }
            function Pt(e){
                return e.x-=e.vx,e.y-=e.vy,e.latestXMove=-e.vx,e.latestYMove=-e.vy,e;
            }
            function wt(e){
                var t=Nt(-Math.PI,Math.PI);
                return e.latestXMove=Math.cos(t)*B,e.latestYMove=-Math.sin(t)*B,e.x+=e.latestXMove,e.y+=e.latestYMove,e;
            }
            function bt(e){
                return e.x+=e.vx2,e.y+=e.vy2,e.latestXMove=e.vx2,e.latestYMove=e.vy2,e;
            }
            function kt(e){
                if(1!==U&&2!==U||(e.x-=e.latestXMove,e.y-=e.latestYMove,e.x-=z,e.y-=J,e.x=-e.x,e.y=-e.y,e.x+=z,e.y+=J),3===U||4===U){
                    var t=Math.abs(e.latestXMove),r=Math.abs(e.latestYMove),o=Le/(Le+Be)*(t/(t+r));
                    o>(Be/(Le+Be)*(r/(t+r))+o)*Math.random()?e.latestXMove<0?(e.x=z+Be,e.y=Nt(J-Le,J+Le)):(e.x=z-Be,e.y=Nt(J-Le,J+Le)):e.latestYMove<0?(e.y=J+Le,e.x=Nt(z-Be,z+Be)):(e.y=J-Le,e.x=Nt(z-Be,z+Be));
                }
                return e;
            }
            function It(e){
                if(1===U||2===U){
                    var t=Nt(-Math.PI,Math.PI),r=Math.random(),o=Math.sqrt(r)*Math.cos(t),a=Math.sqrt(r)*Math.sin(t);
                    o=o*Be+z,a=a*Le+J,e.x=o,e.y=a;
                }else if(3!==U&&4!==U){
                    e.x=Nt(z-Be,z+Be),e.y=Nt(J-Le,J+Le);
                }
                return e;
            }
            function Nt(e,t){
                return e+Math.random()*(t-e);
            }
            function At(e,t){
                return void 0!==e?e:t
            }}}return r.info=t,r;}(jsPsychModule);
            //# sourceMappingURL=index.browser.min.js.map