        var canvas3_box = $(".canvas3_box");
        var docucontext2 = document.getElementById('canvas2');
        var context2 = document.getElementById('canvas2').getContext('2d');
        var context3 = document.getElementById('canvas3').getContext('2d');
        var docucontext3 = document.getElementById('canvas3');
        docucontext3.height = 100;
        docucontext3.width = 100;
        docucontext2.height = 300;
        docucontext2.width = 580;

        //创建新的图片对象
        var img = new Image();
        //指定图片的URL
        img.src = "https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/skin/112.jpg?2";


        // 封装了一个简单的方法
        function circleImg(ctx, img, x, y, r) {

            ctx.save();
            var d = 2 * r;
            var cx = x + r;
            var cy = y + r;
            ctx.arc(cx, cy, r, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(img, x, y, d, d);
            ctx.restore();
        }
        img.onload = function name(params) {
            circleImg(context3, img, 0, 0, docucontext3.height / 2);
        }

        EllipseOne(context2, docucontext2.width / 2, docucontext2.height, docucontext2.width * 0.73, docucontext2.height * 0.76)

        function EllipseOne(context, x, y, a, b) {
            var step = (a > b) ? 1 / a : 1 / b;
            context.beginPath();
            context.moveTo(x + a, y);
            for (var i = 0; i < 2 * Math.PI; i += step) {
                context.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
            }
            context.fillStyle = "#00d582"
            context.closePath();
            context.fill();
            drawText(context, "健康是这样一种东西，它会让你感觉现在是一年中最好的时光", x, 140, 540, 34);
        }

        //设置定时器   

        function drawText(context, t, x, y, w, f) {

            var chr = t.split("");
            var temp = "";
            var row = [];

            context.font = f + "px Arial";
            context.fillStyle = "#ffffff";
            context.textBaseline = "middle";

            context.textAlign = "center"
            for (var a = 0; a < chr.length; a++) {
                if (context.measureText(temp).width < w) {;
                } else {
                    row.push(temp);
                    temp = "";
                }
                temp += chr[a];
            }

            row.push(temp);

            for (var b = 0; b < row.length; b++) {
                context.fillText(row[b], x, y + (b + 1) * f * 1.2);
            }
        }