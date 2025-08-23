const containerCanvas = document.getElementById('containerCanvas');
async function loadProfile() {
    try {
        const { data, error } = await supabase
            .from('profile')
            .select('*');
        
        if (error) {
            containerCanvas.className = 'mx-auto lg:max-w-screen-xl max-h-[calc(100dvh-8rem)] h-dvh flex flex-col justify-center';
            containerCanvas.innerHTML = `<p class="textH2Tagline">Invalid data<br><i>${error.message}</i></p>
                                         <a class="textH1Index paddingY cursor-pointer transitionOpacity" href="../index.html">back to home</a>`;
            return;
        } else {
            const dataProfile = data && data.length > 0 ? data[0] : null;
            if (dataProfile) {
                const profileCanvas = document.getElementById('profileCanvas');
                profileCanvas.innerHTML = "";

                const profileTitle = document.createElement('h2');
                if (profileTitle) {
                    profileTitle.id = "profileTitle";
                    profileTitle.className = "hidden lg:block textH2Title paddingXY";
                    profileTitle.innerHTML = "Profile";
                }

                const bannerContainer = document.createElement('div');
                if (bannerContainer) {
                    bannerContainer.id = "bannerContainer";
                    bannerContainer.className = "lg:border-y aspect-21/9 overflow-hidden rahmadipTheme";

                    const banner = document.createElement('img');
                    banner.id = "banner";
                    banner.className = dataProfile.banner ? "w-full h-full object-cover transitionBnW" : "hidden";
                    banner.src = dataProfile.banner || "";
                    banner.alt = "Banner Image" || "Banner not found";
                    banner.loading = "lazy";

                    bannerContainer.appendChild(banner);
                }

                const profileContainer = document.createElement('div');
                if (profileContainer) {
                    profileContainer.id = "profileContainer";
                    profileContainer.className = "-mt-8 sm:-mt-10 lg:-mt-12";

                    const centerProfile = document.createElement('div');
                    if (centerProfile) {
                        centerProfile.id = "centerProfile";
                        centerProfile.className = "flex gap-3 items-end paddingX";

                        const photoContainer = document.createElement('div');
                        if (photoContainer) {
                            photoContainer.id = "photoContainer";
                            photoContainer.className = "border aspect-square size-24 sm:size-30 lg:size-30 rahmadipRounded overflow-hidden rahmadipTheme";
                            
                            const photo = document.createElement('img');
                            photo.id = "photo";
                            photo.className = dataProfile.photo ? "w-full h-full object-cover transitionBnW" : "hidden";
                            photo.src = dataProfile.photo || "";
                            photo.alt = "Photo Profile" || "Photo not found";
                            photo.loading = "lazy";

                            photoContainer.appendChild(photo);
                        }

                        const mainProfile = document.createElement('div');
                        if (mainProfile) {
                            mainProfile.id = "mainProfile";

                            const fullName = document.createElement('h1');
                            fullName.id = "fullname";
                            fullName.innerHTML = dataProfile.name || 'Name data not found';
                            fullName.className = "textH1Title";

                            const occupation = document.createElement('p');
                            occupation.id = "occupation";
                            occupation.innerHTML = dataProfile.occupation || 'Occupation data not found';
                            occupation.className = "textPDesc transitionOpacity cursor-pointer";

                            const domicile = document.createElement('p');
                            domicile.id = "domicile";
                            domicile.innerHTML = dataProfile.domicile || 'Domicile data not found';
                            domicile.className = "textPDesc italic transitionOpacity cursor-pointer";

                            mainProfile.append(fullName, occupation, domicile);
                        }

                        centerProfile.append(photoContainer,mainProfile);
                    }

                    const aboutMe = document.createElement('p');
                    if (aboutMe) {
                        aboutMe.id = "aboutMe";
                        aboutMe.innerHTML = dataProfile.about || 'Profile data not found';
                        aboutMe.className = "textPDesc paddingX paddingY";
                    }

                    const barLink = document.createElement('div');
                    if (barLink) {
                        barLink.id = "barLink";
                        barLink.className = "paddingB";

                        const email = document.createElement('a');
                        email.id = "email"
                        email.innerHTML = "Email";
                        email.href = `mailto:${dataProfile.email}`;
                        email.className = dataProfile.email ? "textPDesc paddingX transitionOpacity" : "hidden";

                        const number = document.createElement('a');
                        number.id = "number";
                        number.innerHTML = "Phone";
                        number.href = `https://wa.me/${dataProfile.number}`;
                        number.target = "_blank";
                        number.rel = "noopener noreferrer";
                        number.className = dataProfile.number ? "textPDesc paddingX transitionOpacity" : "hidden";

                        const linkedin = document.createElement('a');
                        linkedin.id = "linkedin";
                        linkedin.innerHTML = "LinkedIn";
                        linkedin.href = dataProfile.linkedin;
                        linkedin.target = "_blank";
                        linkedin.rel = "noopener noreferrer";
                        linkedin.className = dataProfile.linkedin ? "textPDesc paddingX transitionOpacity" : "hidden";

                        const behance = document.createElement('a');
                        behance.id = "behance";
                        behance.innerHTML = "Behance";
                        behance.href = dataProfile.behance;
                        behance.target = "_blank";
                        behance.rel = "noopener noreferrer";
                        behance.className = dataProfile.behance ? "textPDesc paddingX transitionOpacity" : "hidden";

                        const instagram = document.createElement('a');
                        instagram.id = "instagram";
                        instagram.innerHTML = "Instagram";
                        instagram.href = dataProfile.instagram;
                        instagram.target = "_blank";
                        instagram.rel = "noopener noreferrer";
                        instagram.className = dataProfile.instagram ? "textPDesc paddingX transitionOpacity" : "hidden";

                        const discord = document.createElement('a');
                        discord.id = "discord";
                        discord.innerHTML = "Discord";
                        discord.href = dataProfile.discord;
                        discord.target = "_blank";
                        discord.rel = "noopener noreferrer";
                        discord.className = dataProfile.discord ? "textPDesc paddingX transitionOpacity" : "hidden";

                        barLink.append(email,number,linkedin,behance,instagram,discord);
                    }

                    profileContainer.append(centerProfile,aboutMe,barLink);
                }
                profileCanvas.append(profileTitle,bannerContainer,profileContainer)
            }
        }
        
    } catch (error) {
        containerCanvas.className = 'mx-auto lg:max-w-screen-xl max-h-[calc(100dvh-8rem)] h-dvh flex flex-col justify-center';
        containerCanvas.innerHTML = `<p class="textH2Tagline">Error catch data<br><i>${error.message}</i></p>
                                     <a class="textH1Index paddingY cursor-pointer transitionOpacity" href="../index.html">back to home</a>`;   
    }
}

document.addEventListener('DOMContentLoaded', loadProfile);