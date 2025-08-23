document.addEventListener('DOMContentLoaded', function() {
    const contactMe = document.getElementById('contactMe');
    const form = document.createElement('form');
    form.classList = 'flex flex-col justify-start h-full rahmadipTheme';

        const contactMeTitle = document.createElement('h2');
        contactMeTitle.innerHTML = 'Contact me';
        contactMeTitle.className = 'textH2Title paddingXY';

        const mainForm = document.createElement('div');
        mainForm.className = 'flex-1 paddingX lg:py-4 lg:border-y rahmadipTheme flexCenter flex-col';
            const message = document.createElement('textarea');
            message.id = 'message';
            message.name = 'message';
            message.placeholder = 'send me a message . . . ';
            message.className = 'border paddingX paddingY w-full focus:outline-none rahmadipRounded rahmadipTheme text-base no-scrollbar h-36 sm:h-72 lg:h-full';
            message.spellcheck = false;
            message.required = true;
        mainForm.appendChild(message);

        const footerForm = document.createElement('div');
        footerForm.className = 'paddingX paddingB pt-2 lg:pt-4 flexBetween gap-2';
            const messageDesc = document.createElement('p');
            messageDesc.innerHTML = 'This message is anonymous by default. To receive a reply, please include your contact information.';
            messageDesc.className = 'textPDesc transitionOpacity italic cursor-pointer';
            const buttonMessage = document.createElement('button');
            buttonMessage.type = 'submit';
            buttonMessage.innerHTML = 'send';
            buttonMessage.className = 'border transitionColor textPDesc w-54 text-center paddingY rahmadipTheme rahmadipRounded';
        footerForm.append(messageDesc,buttonMessage);

    form.append(contactMeTitle,mainForm,footerForm);
    contactMe.appendChild(form);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        buttonMessage.className = 'border bg-neutral-50 text-neutral-950 textPDesc w-54 text-center paddingY rahmadipTheme rahmadipRounded cursor-pointer';
        buttonMessage.innerHTML = 'Sending . . . ';
        buttonMessage.disabled = true;
        const finalMessage = message.value.trim()
        if (!finalMessage) return

        const {error} = await supabase
            .from('message')
            .insert([{ message: finalMessage }])
        
        if (error) {
            form.reset();
            buttonMessage.disabled = false;
            buttonMessage.innerHTML = "Send";
            buttonMessage.className = "border transitionColor textPDesc w-54 text-center paddingY rahmadipTheme rahmadipRounded cursor-pointer";
            contactMeTitle.innerHTML = "Contact me | <i>failed to send message</i>";
            console.error('Error!', error);
        } else {
            form.reset();
            buttonMessage.disabled = false;
            buttonMessage.innerHTML = "Send";
            buttonMessage.className = "border transitionColor textPDesc w-54 text-center paddingY rahmadipTheme rahmadipRounded cursor-pointer";
            contactMeTitle.innerHTML = "Contact me | <i>your message has been sent</i> &#10003;";
            console.log('Success!');
        }

    })
});