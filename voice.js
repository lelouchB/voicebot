		    const btn=document.querySelector('.talk')
                    const content=document.getElementById('cont')
                     
                    const greeting=['Hello Im good  how are you',
                    'Doing good you ',
                    'Leave Me Alone ',
                    'Somewhere between better and best ',
                    'All the better now that you asked',
                    'Oh stop it',
                    'Much better now that you are with me',
                    'At minding my own business? Better than most people',
                    'Do you really care? ',
                    'Armed and ready! ',
                    'My lawyer says I don’t have to answer that question.',
                    'What do you want?',
                    'Like you, but better',
                    'Howdy, How are you today',
                    'I was fine until you asked']
                    const weather=[
                        'weather is fine'
                    ]
                     
                    const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
                    const recognition = new SpeechRecognition()
                    recognition.onstart=()=>{
                    console.log(' voice is activated ')
                    }
                    recognition.onresult=(event)=>{
                    const current=event.resultIndex
                    const transcript=  event.results[current][0].transcript
                     content.innerHTML= transcript
                    readOutLoud(transcript)
                    }
                    btn.addEventListener('click',()=>{
                        recognition.start()
                    })
                    function readOutLoud(message){
                        const speech= new SpeechSynthesisUtterance()
                        speech.text='I dont want to talk to you so just go away '
                        
                        if(message.includes('how are you')||message.includes('hello')){
                            const finalText =greeting[Math.floor(Math.random()*greeting.length)]
                              speech.text=finalText
                          }
                        speech.volume=1
                        speech.rate=1
                        window.speechSynthesis.speak(speech)
                    
                    }
