
window.onload = init;

function init() {
    const colors = [
        //row A
        "rgba(99,45,19,255)",
        "rgba(107,40,21,255)",
        "rgba(121,32,24,255)",
        "rgba(134,30,27,255)",
        "rgba(150,30,32,255)",
        "rgba(159,28,34,255)",
        "rgba(175,32,38,255)",
        "rgba(195,34,40,255)",
        "rgba(222,33,40,255)",
        "rgba(237,32,39,255)",
        "rgba(238,34,43,255)",
        "rgba(236,30,40,255)",
        "rgba(234,31,51,255)",
        "rgba(235,27,61,255)",
        "rgba(236,31,74,255)",
        "rgba(230,27,83,255)",
        "rgba(226,19,101,255)",
        "rgba(226,17,118,255)",
        "rgba(218,13,134,255)",
        "rgba(209,27,138,255)",
        "rgba(202,41,147,255)",
        "rgba(188,48,147,255)",
        "rgba(174,56,142,255)",
        "rgba(167,58,149,255)",
        "rgba(159,56,148,255)",
        "rgba(149,55,152,255)",
        "rgba(140,61,152,255)",
        "rgba(135,62,151,255)",
        "rgba(125,60,152,255)",
        "rgba(116,65,157,255)",
        //row B
        "rgba(136,74,33,255)",
        "rgba(148,71,38,255)",
        "rgba(158,61,32,255)",
        "rgba(175,63,38,255)",
        "rgba(185,56,50,255)",
        "rgba(200,45,41,255)",
        "rgba(213,41,41,255)",
        "rgba(229,34,40,255)",
        "rgba(234,47,51,255)",
        "rgba(237,42,46,255)",
        "rgba(235,46,53,255)",
        "rgba(238,39,58,255)",
        "rgba(237,32,70,255)",
        "rgba(235,35,80,255)",
        "rgba(237,33,96,255)",
        "rgba(238,24,110,255)",
        "rgba(237,22,125,255)",
        "rgba(231,20,141,255)",
        "rgba(219,43,144,255)",
        "rgba(206,55,152,255)",
        "rgba(193,62,150,255)",
        "rgba(181,61,151,255)",
        "rgba(170,59,137,255)",
        "rgba(170,57,152,255)",
        "rgba(160,54,148,255)",
        "rgba(147,58,150,255)",
        "rgba(137,62,154,255)",
        "rgba(135,62,152,255)",
        "rgba(115,61,151,255)",
        "rgba(105,60,151,255)",
        //row C 
        "rgba(167,98,39,255)",
        "rgba(171,91,38,255)",
        "rgba(189,92,41,255)",
        "rgba(195,78,40,255)",
        "rgba(206,73,40,255)",
        "rgba(215,65,41,255)",
        "rgba(228,56,41,255)",
        "rgba(236,52,42,255)",
        "rgba(239,57,46,255)",
        "rgba(241,62,66,255)",
        "rgba(235,64,82,255)",
        "rgba(241,61,83,255)",
        "rgba(237,59,95,255)",
        "rgba(234,52,103,255)",
        "rgba(240,49,122,255)",
        "rgba(238,48,136,255)",
        "rgba(232,52,149,255)",
        "rgba(221,68,154,255)",
        "rgba(207,75,158,255)",
        "rgba(188,75,155,255)",
        "rgba(184,70,155,255)",
        "rgba(166,73,154,255)",
        "rgba(162,70,155,255)",
        "rgba(148,69,152,255)",
        "rgba(140,67,159,255)",
        "rgba(134,61,153,255)",
        "rgba(120,61,153,255)",
        "rgba(112,62,151,255)",
        "rgba(108,57,149,255)",
        "rgba(93,48,153,255)",
        //row D
        "rgba(204,131,44, 255)",
        "rgba(215,129,42, 255)",
        "rgba(218,121,35, 255)",
        "rgba(233,121,39, 255)",
        "rgba(232,104,38, 255)",
        "rgba(231,95,35, 255)",
        "rgba(242,97,42, 255)",
        "rgba(243,85,53, 255)",
        "rgba(239,82,63, 255)",
        "rgba(242,89,79, 255)",
        "rgba(241,92,101, 255)",
        "rgba(240,93,109, 255)",
        "rgba(241,87,115, 255)",
        "rgba(237,85,129, 255)",
        "rgba(239,81,142, 255)",
        "rgba(238,80,154, 255)",
        "rgba(224,84,159, 255)",
        "rgba(205,87,160, 255)",
        "rgba(189,92,164, 255)",
        "rgba(181,87,161, 255)",
        "rgba(167,84,164, 255)",
        "rgba(155,78,158, 255)",
        "rgba(148,76,158, 255)",
        "rgba(141,73,156, 255)",
        "rgba(133,69,156, 255)",
        "rgba(122,67,156, 255)",
        "rgba(112,63,155, 255)",
        "rgba(102,56,149, 255)",
        "rgba(89,52,148, 255)",
        "rgba(72,47,139, 255)",
        //row E
        "rgba(232,158,37,255)",
        "rgba(243,153,33, 255)",
        "rgba(252,145,43, 255)",
        "rgba(247,141,32, 255)",
        "rgba(243,135,37,255)",
        "rgba(248,118,48,255)",
        "rgba(250,116,60,255)",
        "rgba(245,109,71, 255)",
        "rgba(244,111,82,255)",
        "rgba(242,119,104,255)",
        "rgba(243,118,116,255)",
        "rgba(244,118,129,255)",
        "rgba(242,119,140, 255)",
        "rgba(240,115,147,255)",
        "rgba(239,104,162, 255)",
        "rgba(230,111,173, 255)",
        "rgba(210,114,175,255)",
        "rgba(199,113,176, 255)",
        "rgba(186,113,172, 255)",
        "rgba(177,102,170, 255)",
        "rgba(159,97,170, 255)",
        "rgba(148,90,164,255)",
        "rgba(143,84,165, 255)",
        "rgba(138,79,161, 255)",
        "rgba(123,74,156, 255)",
        "rgba(112,69,157, 255)",
        "rgba(99,63,153, 255)",
        "rgba(89,52,147, 255)",
        "rgba(71,47,147,255)",
        "rgba(52,46,132,255)",
        //row F
        "rgba(254,180,20,255)",
        "rgba(254,177,29,255)",
        "rgba(248,173,39,255)",
        "rgba(247,172,57,255)",
        "rgba(253,168,67,255)",
        "rgba(248,164,75,255)",
        "rgba(245,151,87,255)",
        "rgba(248,144,94,255)",
        "rgba(247,135,95,255)",
        "rgba(245,136,113,255)",
        "rgba(249,142,133,255)",
        "rgba(247,141,145,255)",
        "rgba(244,143,157,255)",
        "rgba(242,138,161,255)",
        "rgba(245,134,180,255)",
        "rgba(228,138,189,255)",
        "rgba(214,138,191,255)",
        "rgba(198,138,189,255)",
        "rgba(182,129,183,255)",
        "rgba(173,123,186,255)",
        "rgba(156,115,181,255)",
        "rgba(141,104,171,255)",
        "rgba(137,95,175,255)",
        "rgba(124,90,166,255)",
        "rgba(116,81,163,255)",
        "rgba(99,74,158,255)",
        "rgba(91,66,157,255)",
        "rgba(77,51,148,255)",
        "rgba(53,46,138,255)",
        "rgba(49,45,123,255)",
        //row G
        "rgba(252,191,23,255)",
        "rgba(255,190,41,255)",
        "rgba(255,183,47,255)",
        "rgba(253,183,57,255)",
        "rgba(253,186,96,255)",
        "rgba(251,168,85,255)",
        "rgba(253,171,98,255)",
        "rgba(245,164,107,255)",
        "rgba(249,161,124,255)",
        "rgba(250,160,134,255)",
        "rgba(248,158,150,255)",
        "rgba(248,157,156,255)",
        "rgba(247,155,166,255)",
        "rgba(245,155,173,255)",
        "rgba(244,156,196,255)",
        "rgba(225,164,203,255)",
        "rgba(209,167,205,255)",
        "rgba(207,173,211,255)",
        "rgba(181,152,199,255)",
        "rgba(170,139,194,255)",
        "rgba(155,130,190,255)",
        "rgba(140,119,184,255)",
        "rgba(127,111,175,255)",
        "rgba(116,100,175,255)",
        "rgba(106,94,166,255)",
        "rgba(93,85,167,255)",
        "rgba(80,77,156,255)",
        "rgba(67,67,153,255)",
        "rgba(51,56,148,255)",
        "rgba(48,49,132,255)",
        //row H
        "rgba(254,208,26,255)",
        "rgba(255,206,43,255)",
        "rgba(255,201,49,255)",
        "rgba(254,201,63,255)",
        "rgba(255,198,75,255)",
        "rgba(254,191,89,255)",
        "rgba(253,186,95,255)",
        "rgba(252,184,109,255)",
        "rgba(252,176,121,255)",
        "rgba(250,175,135,255)",
        "rgba(249,174,143,255)",
        "rgba(252,177,158,255)",
        "rgba(245,182,173,255)",
        "rgba(248,179,183,255)",
        "rgba(234,181,199,255)",
        "rgba(217,182,215,255)",
        "rgba(205,183,219,255)",
        "rgba(203,189,222,255)",
        "rgba(181,170,212,255)",
        "rgba(167,161,205,255)",
        "rgba(152,149,202,255)",
        "rgba(132,137,195,255)",
        "rgba(116,124,187,255)",
        "rgba(109,118,186,255)",
        "rgba(94,109,178,255)",
        "rgba(84,98,171,255)",
        "rgba(73,90,168,255)",
        "rgba(62,80,162,255)",
        "rgba(48,70,155,255)",
        "rgba(38,63,149,255)",
        //row I
        "rgba(253,222,17,255)",
        "rgba(252,223,31,255)",
        "rgba(248,219,55,255)",
        "rgba(255,216,66,255)",
        "rgba(253,223,77,255)",
        "rgba(255,217,90,255)",
        "rgba(253,218,98,255)",
        "rgba(252,216,106,255)",
        "rgba(245,221,125,255)",
        "rgba(242,225,143,255)",
        "rgba(239,220,161,255)",
        "rgba(231,228,177,255)",
        "rgba(224,223,193,255)",
        "rgba(221,226,206,255)",
        "rgba(212,226,213,255)",
        "rgba(201,221,230,255)",
        "rgba(197,216,246,255)",
        "rgba(197,217,244,255)",
        "rgba(170,200,234,255)",
        "rgba(150,187,229,255)",
        "rgba(140,171,218,255)",
        "rgba(123,161,210,255)",
        "rgba(116,147,204,255)",
        "rgba(100,134,195,255)",
        "rgba(90,120,184,255)",
        "rgba(75,105,178,255)",
        "rgba(62,101,170,255)",
        "rgba(62,91,169,255)",
        "rgba(50,80,178,255)",
        "rgba(41,73,160,255)",
        //row J
        "rgba(249,236,36,255)",
        "rgba(249,235,40,255)",
        "rgba(252,236,55,255)",
        "rgba(248,239,74,255)",
        "rgba(250,237,81,255)",
        "rgba(250,239,98,255)",
        "rgba(246,239,107,255)",
        "rgba(240,237,134,255)",
        "rgba(230,235,141,255)",
        "rgba(226,234,159,255)",
        "rgba(218,233,178,255)",
        "rgba(213,234,195,255)",
        "rgba(209,234,205,255)",
        "rgba(210,233,213,255)",
        "rgba(203,230,215,255)",
        "rgba(189,227,230,255)",
        "rgba(176,227,244,255)",
        "rgba(181,226,247,255)",
        "rgba(162,219,246,255)",
        "rgba(138,211,244,255)",
        "rgba(127,199,239,255)",
        "rgba(115,181,229,255)",
        "rgba(102,167,221,255)",
        "rgba(92,151,209,255)",
        "rgba(80,139,199,255)",
        "rgba(75,124,190,255)",
        "rgba(67,111,184,255)",
        "rgba(59,102,180,255)",
        "rgba(57,92,173,255)",
        "rgba(53,81,164,255)",
        //row K
        "rgba(243,235,64,255)",
        "rgba(245,237,68,255)",
        "rgba(244,234,85,255)",
        "rgba(246,235,85,255)",
        "rgba(234,238,92,255)",
        "rgba(235,233,110,255)",
        "rgba(229,230,126,255)",
        "rgba(223,231,130,255)",
        "rgba(219,228,139,255)",
        "rgba(202,224,139,255)",
        "rgba(191,223,150,255)",
        "rgba(184,216,167,255)",
        "rgba(180,218,177,255)",
        "rgba(174,218,185,255)",
        "rgba(176,222,194,255)",
        "rgba(174,221,213,255)",
        "rgba(170,220,221,255)",
        "rgba(171,220,225,255)",
        "rgba(153,216,233,255)",
        "rgba(133,213,238,255)",
        "rgba(118,210,251,255)",
        "rgba(105,202,244,255)",
        "rgba(95,190,238,255)",
        "rgba(89,168,224,255)",
        "rgba(83,154,210,255)",
        "rgba(73,137,208,255)",
        "rgba(63,126,195,255)",
        "rgba(61,113,188,255)",
        "rgba(57,103,181,255)",
        "rgba(53,94,176,255)",

        //row L
        "rgba(240,234,39,255)",
        "rgba(240,233,43,255)",
        "rgba(239,231,56,255)",
        "rgba(233,231,61,255)",
        "rgba(231,227,68,255)",
        "rgba(223,226,83,255)",
        "rgba(209,223,100,255)",
        "rgba(194,216,105,255)",
        "rgba(177,213,110,255)",
        "rgba(169,210,118,255)",
        "rgba(159,208,126,255)",
        "rgba(150,206,138,255)",
        "rgba(143,207,157,255)",
        "rgba(142,207,157,255)",
        "rgba(148,204,171,255)",
        "rgba(142,205,178,255)",
        "rgba(144,206,192,255)",
        "rgba(142,208,198,255)",
        "rgba(132,207,203,255)",
        "rgba(123,205,214,255)",
        "rgba(102,207,213,255)",
        "rgba(88,199,226,255)",
        "rgba(58,201,237,255)",
        "rgba(55,185,241,255)",
        "rgba(62,166,226,255)",
        "rgba(62,153,216,255)",
        "rgba(68,136,201,255)",
        "rgba(60,122,187,255)",
        "rgba(63,110,192,255)",
        "rgba(53,100,178,255)",
        //row M
        "rgba(225,226,40,255)",
        "rgba(219,224,42,255)",
        "rgba(215,223,45,255)",
        "rgba(211,222,56,255)",
        "rgba(200,219,65,255)",
        "rgba(189,213,73,255)",
        "rgba(174,210,78,255)",
        "rgba(161,204,86,255)",
        "rgba(147,201,90,255)",
        "rgba(135,200,98,255)",
        "rgba(121,194,105,255)",
        "rgba(115,194,113,255)",
        "rgba(113,193,120,255)",
        "rgba(114,192,133,255)",
        "rgba(110,195,140,255)",
        "rgba(115,197,149,255)",
        "rgba(114,197,157,255)",
        "rgba(118,199,170,255)",
        "rgba(117,199,169,255)",
        "rgba(107,198,180,255)",
        "rgba(97,199,186,255)",
        "rgba(83,193,196,255)",
        "rgba(70,197,209,255)",
        "rgba(49,193,220,255)",
        "rgba(29,186,231,255)",
        "rgba(33,170,225,255)",
        "rgba(42,154,218,255)",
        "rgba(55,143,207,255)",
        "rgba(49,128,196,255)",
        "rgba(45,115,187,255)",
        //row N
        "rgba(192,216,45,255)",
        "rgba(190,213,46,255)",
        "rgba(181,209,54,255)",
        "rgba(171,207,57,255)",
        "rgba(161,204,56,255)",
        "rgba(149,202,64,255)",
        "rgba(150,202,64,255)",
        "rgba(121,193,64,255)",
        "rgba(109,187,68,255)",
        "rgba(97,180,70,255)",
        "rgba(85,179,75,255)",
        "rgba(79,178,85,255)",
        "rgba(74,182,90,255)",
        "rgba(72,185,105,255)",
        "rgba(83,185,115,255)",
        "rgba(87,188,123,255)",
        "rgba(90,190,125,255)",
        "rgba(93,192,138,255)",
        "rgba(97,191,139,255)",
        "rgba(97,196,149,255)",
        "rgba(93,192,161,255)",
        "rgba(85,190,173,255)",
        "rgba(74,191,180,255)",
        "rgba(56,190,197,255)",
        "rgba(44,193,204,255)",
        "rgba(21,183,224,255)",
        "rgba(19,174,224,255)",
        "rgba(26,162,222,255)",
        "rgba(37,150,214,255)",
        "rgba(41,131,202,255)",
        //row O
        "rgba(161,194,65,255)",
        "rgba(154,197,62,255)",
        "rgba(142,191,61,255)",
        "rgba(138,190,63,255)",
        "rgba(130,185,65,255)",
        "rgba(107,178,70,255)",
        "rgba(97,175,73,255)",
        "rgba(87,168,73,255)",
        "rgba(80,164,72,255)",
        "rgba(64,158,72,255)",
        "rgba(53,156,73,255)",
        "rgba(71,170,94,255)",
        "rgba(38,171,78,255)",
        "rgba(45,177,78,255)",
        "rgba(60,181,91,255)",
        "rgba(54,181,99,255)",
        "rgba(64,183,98,255)",
        "rgba(69,185,114,255)",
        "rgba(75,186,117,255)",
        "rgba(88,185,121,255)",
        "rgba(83,189,133,255)",
        "rgba(78,189,146,255)",
        "rgba(75,187,161,255)",
        "rgba(64,188,168,255)",
        "rgba(52,189,180,255)",
        "rgba(44,189,193,255)",
        "rgba(32,189,211,255)",
        "rgba(17,177,216,255)",
        "rgba(13,167,221,255)",
        "rgba(24,158,217,255)",
        //row P
        "rgba(122,164,64,255)",
        "rgba(120,168,66,255)",
        "rgba(110,168,68,255)",
        "rgba(103,162,68,255)",
        "rgba(89,162,70,255)",
        "rgba(76,159,69,255)",
        "rgba(65,153,69,255)",
        "rgba(61,149,71,255)",
        "rgba(43,145,72,255)",
        "rgba(35,136,70,255)",
        "rgba(28,138,67,255)",
        "rgba(24,146,73,255)",
        "rgba(30,153,72,255)",
        "rgba(28,162,75,255)",
        "rgba(31,169,74,255)",
        "rgba(40,180,73,255)",
        "rgba(48,179,73,255)",
        "rgba(52,183,90,255)",
        "rgba(58,182,96,255)",
        "rgba(65,182,104,255)",
        "rgba(67,183,112,255)",
        "rgba(61,182,128,255)",
        "rgba(49,185,137,255)",
        "rgba(46,185,146,255)",
        "rgba(38,186,164,255)",
        "rgba(30,188,174,255)",
        "rgba(29,187,188,255)",
        "rgba(16,190,201,255)",
        "rgba(12,180,216,255)",
        "rgba(16,176,224,255)"
    ]

    var game = document.getElementById("game");
    for (var i = 0; i < colors.length; i++) {
        var tile = document.createElement('div');
        tile.classList.add('tile');
        tile.id = "tile_" + i;
        tile.style.background = colors[i];
        tile.addEventListener('mouseup', (event) => console.log("hello"), false);
        game.appendChild(tile);
    }
}