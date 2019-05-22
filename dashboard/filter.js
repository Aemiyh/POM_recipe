var ingredientArray;
var titleArray;
var categoriersArray;
window.onload = function() {
    (function() {
        $.getJSON( "./data/Cookies_small.json", function( data){
            

            var cbox1 = dc.cboxMenu('#cbox1'),
            cbox2 = dc.cboxMenu('#cbox2'),
            cbox3 = dc.cboxMenu('#cbox3'),
            datatable = dc.dataTable('#datatable');
            // create a bunch of crosslinked categorical data
            var letters = [];
            for (var i = 0; i < 26; ++i)
                letters.push(String.fromCharCode(i + 65));

            var colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black',
                'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate',
                'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod',
                'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'Darkorange',
                'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey',
                'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick',
                'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey',
                'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender',
                'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow',
                'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue',
                'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta',
                'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen',
                'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue',
                'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange',
                'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip',
                'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown',
                'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray',
                'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet',
                'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
            var states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN',
                'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM',
                'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'PW', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA',
                'WI', 'WV', 'WY'];
            var data = [], SIZE = 500;
            function rnd (a) {
                return a[Math.floor(Math.random() * a.length)];
            }
            for (i = 0; i < SIZE; ++i)
                data.push({letter: rnd(letters), color: rnd(colors), state: rnd(states)});
            var ndx = crossfilter(data),
                letterDimension = ndx.dimension(function (d) {
                    return d.letter;
                }),
                colorDimension = ndx.dimension(function (d) {
                    return d.color;
                }),
                stateDimension = ndx.dimension(function (d) {
                    return d.state;
                }),
                letterDimension2 = ndx.dimension(function (d) {
                    return d.letter;
                });
            cbox1
                .dimension(letterDimension)
                .group(letterDimension.group())
                .controlsUseVisibility(true);
            cbox2
                .dimension(colorDimension)
                .group(colorDimension.group())
                .multiple(true)
                //    .numberVisible(10)
                .controlsUseVisibility(true);
            cbox3.dimension(stateDimension)
                .group(stateDimension.group())
                .multiple(true)
                //    .numberVisible(10)
                .controlsUseVisibility(true);
            datatable
                .dimension(letterDimension2)
                .section(function (d) {
                    return d.letter;
                })
                .columns(['color', 'state'])
                .size(data.length);
            dc.renderAll();
    
        });
    });
}