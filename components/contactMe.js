document.addEventListener("DOMContentLoaded", function () {
    fetch("../components/contactMe.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("contactMe").innerHTML = data;
            const scriptURL = 'https://script.google.com/macros/s/AKfycbyqu6T4QO6XgBoxur1TF7z30_A0_hTzqy6Lyby7HRpjNkewp9Ql9g7V-QKrWxDpXOSvUg/exec'
            const form = document.forms['messageRahmadipPortfolio']
            const contactMeForm = document.getElementById('contactMeForm');
            
            const contactMeTitle = document.createElement("h2");
                contactMeTitle.id = "contanctMeTitle";
                contactMeTitle.innerHTML = "Contact me";
                contactMeTitle.className = "textH2Title paddingXY"



            const mainForm = document.createElement('div');
                mainForm.id = 'mainForm';
                mainForm.className = 'flex-1 paddingX lg:py-4 lg:border-y rahmadipTheme grid';

                const message = document.createElement("textarea");
                    message.id = "message";
                    message.name = "message";
                    message.spellcheck = false;
                    message.placeholder = "send me a message . . .";
                    message.rows = "15";
                    message.className = "border paddingX paddingY w-full focus:outline-none rahmadipRounded rahmadipTheme text-base no-scrollbar";
                    message.required = true;

                mainForm.appendChild(message);



            const footerForm = document.createElement('div');

                footerForm.id = "footerForm";
                footerForm.className = 'paddingX paddingB pt-2 lg:pt-4 flexBetween gap-2';

                const messageDesc = document.createElement("p");
                    messageDesc.id = "messageDesc";
                    messageDesc.innerHTML = "This message is anonymous by default. To receive a reply, please include your contact information.";
                    messageDesc.className = "textPDesc transitionOpacity italic cursor-pointer";

                const buttonMessage = document.createElement("button");
                    buttonMessage.id = "buttonMessage";
                    buttonMessage.type = "submit";
                    buttonMessage.innerHTML = "Send";
                    buttonMessage.className = "border transitionColor textPDesc w-54 text-center paddingY rahmadipTheme rahmadipRounded cursor-pointer";

                footerForm.append(messageDesc,buttonMessage);



            contactMeForm.append(contactMeTitle,mainForm,footerForm);

            form.addEventListener('submit', e => {
                e.preventDefault()
                buttonMessage.className = "border bg-neutral-50 text-neutral-950 textPDesc w-54 text-center paddingY rahmadipTheme rahmadipRounded cursor-pointer";
                buttonMessage.innerHTML = "Sending . . . "

                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then(response => {
                        form.reset();
                        buttonMessage.innerHTML = "Send";
                        buttonMessage.className = "border transitionColor textPDesc w-54 text-center paddingY rahmadipTheme rahmadipRounded cursor-pointer";
                        contactMeTitle.innerHTML = "Contact me | <i>your message has been sent</i> &#10003;";
                        console.log('Success!', response);
                    })
                    .catch(error => {
                        form.reset();
                        buttonMessage.innerHTML = "Send";
                        buttonMessage.className = "border transitionColor textPDesc w-54 text-center paddingY rahmadipTheme rahmadipRounded cursor-pointer";
                        contactMeTitle.innerHTML = "Contact me | <i>failed to send message</i>";
                        console.error('Error!', error.message)
                    })
            })
        });
}); 