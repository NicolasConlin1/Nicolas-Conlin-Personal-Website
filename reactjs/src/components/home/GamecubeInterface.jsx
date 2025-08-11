import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import controllerBaseImage from '../../assets/GameCubeControllerBase.png'
import controllerBaseImage from '../../assets/GC-Final.png'
import lButtonImage from '../../assets/GCL-Final.png'
import rButtonImage from '../../assets/GCR-Final.png'
import aButtonImage from '../../assets/GCA-Final.png'
import bButtonImage from '../../assets/GCB-Final.png'
import xButtonImage from '../../assets/GCX-Final.png'
import yButtonImage from '../../assets/GCY-Final.png'

const GamecubeInterface = () => { 

    const navigate = useNavigate();
    const controllerCanvasRef = useRef(null);

    useEffect(() => {
        console.log('inuse')
        const controllerCanvas = controllerCanvasRef.current;
        console.log(controllerCanvas);
        if (controllerCanvas.getContext) {

            console.log("canvas found");

            const scaleOffset = 7;

            let pressedButton;
            let lButtonX;
            let lButtonY;
            let rButtonX;
            let rButtonY;
            let aButtonX;
            let aButtonY;
            let aButtonScale;
            let bButtonX;
            let bButtonY;
            let bButtonScale;
            let displayNumber;
            let xButtonX;
            let xButtonY;
            let xButtonScale;
            let yButtonX;
            let yButtonY;
            let yButtonScale;
            let displayEmail;

            const resetValues = () => {
                pressedButton = '';
                lButtonX = 50;
                lButtonY = -25;
                rButtonX = 525;
                rButtonY = -22;
                aButtonX = 501;
                aButtonY = 120;
                aButtonScale = 1;
                bButtonX = 421;
                bButtonY = 162;
                bButtonScale = 1;
                displayNumber = false;
                xButtonX = 580;
                xButtonY = 105;
                xButtonScale = 1;
                yButtonX = 478;
                yButtonY = 45;
                yButtonScale = 1;
                displayEmail = false;
            };
            resetValues();

            const ctx = controllerCanvas.getContext('2d');
            const baseController = new Image();
            baseController.src = controllerBaseImage;
            baseController.onerror = (error) => {
                console.log('Error Load: Main Controller');
                console.log(error);
            }
            baseController.onload = () => {
                controllerCanvas.width = baseController.width;
                controllerCanvas.height = baseController.height;
                ctx.drawImage(baseController, 0, 0);
            };

            const lButton = new Image();
            lButton.src = lButtonImage;
            lButton.onerror = (error) => {
                console.log('Error Load: L Button');
                console.log(error);
            }
            lButton.onload = () => {
                ctx.drawImage(lButton, lButtonX, lButtonY);
            }

            const rButton = new Image();
            rButton.src = rButtonImage;
            rButton.onerror = (error) => {
                console.log('Error Load: R Button')
                console.log(error);
            }
            rButton.onload = () => {
                ctx.drawImage(rButton, rButtonX, rButtonY);
            }

            const aButton = new Image();
            aButton.src = aButtonImage;
            aButton.onerror = (error) => {
                console.log('Error Load: A Button')
                console.log(error);
            }
            aButton.onload = () => {
                ctx.drawImage(aButton, aButtonX, aButtonY);
            }

            const bButton = new Image();
            bButton.src = bButtonImage;
            bButton.onerror = (error) => {
                console.log('Error Load: B Button')
                console.log(error);
            }
            bButton.onload = () => {
                ctx.drawImage(bButton, bButtonX, bButtonY);
            }

            const xButton = new Image();
            xButton.src = xButtonImage;
            xButton.onerror = (error) => {
                console.log('Error Load: X Button')
                console.log(error);
            }
            xButton.onload = () => {
                ctx.drawImage(xButton, xButtonX, xButtonY);
            }

            const yButton = new Image();
            yButton.src = yButtonImage;
            yButton.onerror = (error) => {
                console.log('Error Load: Y Button')
                console.log(error);
            }
            yButton.onload = () => {
                ctx.drawImage(yButton, yButtonX, yButtonY);
            }

            const animate = () => {
                ctx.clearRect(0, 0, controllerCanvas.width, controllerCanvas.height)
                ctx.drawImage(lButton, lButtonX, lButtonY)
                ctx.drawImage(rButton, rButtonX, rButtonY)

                ctx.drawImage(baseController, 0, 0);

                ctx.drawImage(aButton, aButtonX, aButtonY, aButton.width * aButtonScale, aButton.height * aButtonScale);
                ctx.drawImage(bButton, bButtonX, bButtonY, bButton.width * bButtonScale, bButton.height * bButtonScale);
                ctx.drawImage(xButton, xButtonX, xButtonY, xButton.width * xButtonScale, xButton.height * xButtonScale);
                ctx.drawImage(yButton, yButtonX, yButtonY, yButton.width * yButtonScale, yButton.height * yButtonScale);

                if (displayNumber) {
                    ctx.fillStyle = '#242424';
                    ctx.fillRect(bButtonX - 55, bButtonY - 10, 260, 50);
                    ctx.fillStyle = 'white';
                    ctx.font = '20px Arial';
                    ctx.fillText('[Mobile] + 1(720) 775 - 7106', bButtonX - 50, bButtonY + 22)

                }
                else if (displayEmail) {
                    ctx.fillStyle = '#242424';
                    ctx.fillRect(yButtonX - 55, yButtonY - 10, 210, 50);
                    ctx.fillStyle = 'white';
                    ctx.font = '20px Arial';
                    ctx.fillText('nicoconlin@gmail.com', yButtonX - 50, yButtonY + 22)
                }
            }
            setTimeout(() => {
                requestAnimationFrame(animate);
            },100)

            controllerCanvas.addEventListener('mousedown', function (event) {
                const mouseX = event.clientX - controllerCanvas.getBoundingClientRect().left;
                const mouseY = event.clientY - controllerCanvas.getBoundingClientRect().top;
                console.log(mouseX);
                console.log(mouseY);
                if (mouseX >= 60 && mouseX <= 188) {
                    const lButtonRelativeY = ((-23 / 42) * mouseX) + (867 / 7);
                    if (mouseY <= lButtonRelativeY) {
                        lButtonY += 25;
                        requestAnimationFrame(animate);
                        pressedButton = 'Resume';
                    }
                }
                else if (mouseX >= 537 && mouseX <= 660) {
                    const rButtonRelativeY = ((64 / 123) * mouseX) - (51622 / 205);
                    if (mouseY <= rButtonRelativeY) {
                        rButtonY += 25;
                        requestAnimationFrame(animate);
                        pressedButton = 'Projects';
                    }
                }
                if (mouseY >= 150 && mouseY <= 238 && mouseX >= 532 && mouseX <= 618) {
                    console.log('A');
                    aButtonScale = 0.9;
                    aButtonX += scaleOffset;
                    aButtonY += scaleOffset;
                    pressedButton = 'About';
                    requestAnimationFrame(animate);
                }
                else if (mouseY >= 208 && mouseY <= 261 && mouseX >= 467 && mouseX <= 520) {
                    bButtonScale = 0.9;
                    bButtonX += scaleOffset;
                    bButtonY += scaleOffset;
                    displayNumber = true;
                    requestAnimationFrame(animate);
                }
                else if (mouseY >= 138 && mouseY <= 216 && mouseX >= 627 && mouseX <= 681) {
                    xButtonScale = 0.9;
                    xButtonX += scaleOffset;
                    xButtonY += scaleOffset;
                    pressedButton = 'LinkedIn';
                    requestAnimationFrame(animate);
                }
                else if (mouseY >= 91 && mouseY <= 145 && mouseX >= 514 && mouseX <= 590) {
                    yButtonScale = 0.9;
                    yButtonX += scaleOffset;
                    yButtonY += scaleOffset;
                    pressedButton = 'Gmail';
                    displayEmail = true;
                    requestAnimationFrame(animate);
                }
            })

            controllerCanvas.addEventListener('mouseleave', function () { 
                console.log('mouseLeave');
                resetValues();
                requestAnimationFrame(animate);
            })

            controllerCanvas.addEventListener('mouseup', function () {
                console.log('mouseup');
                switch (pressedButton) {
                    case 'Resume':
                        navigate(`/Resume`);
                        break;
                    case 'Projects':
                        navigate('/Projects');
                        break;
                    case 'About':
                        navigate('/About');
                        break;
                    case 'LinkedIn':
                        console.log('linkedIn Redirect');
                        window.open('https://www.linkedin.com/in/nicolas-conlin-csci');
                        break;
                    case 'Gmail':
                        window.open('mailto:nicoconlin@gmail.com');
                        break;
                    default:
                        break;
                }
                resetValues();
                requestAnimationFrame(animate);
            })
        }

        else {
            console.log("canvas not found")
        }
    },);

    return <canvas ref={controllerCanvasRef} style={{ cursor: 'pointer', transformOrigin: 'center' }}></canvas>
        
}

export default GamecubeInterface;