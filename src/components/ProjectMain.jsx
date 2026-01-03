'use client';
import { Carousel, CarouselContent, CarouselItem } from "./motion-primitives/carousel";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { get } from "@/lib/fetch";
import Assets from "@/assets/assets.json";

export function ProjectContent({ project }) {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    if (!project.contents || project.contents.length === 0) {
        return null
    }

    if (project.contents && project.contents.length === 1) {
        const content = project.contents[0];
        const extension = content.split('.').pop().toLowerCase();
        const classSection = "justify-center items-center p-0 bg-black lg:aspect-video";
        const classMedia = "duration-0 lg:w-auto";

        if (['mp4', 'webm'].includes(extension)) {
            return (
                <section className={ classSection }>
                    <motion.video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={ classMedia }
                        crossOrigin={ 'anonymous' }
                        layoutId={`media-${content}`}
                        src={ content }
                        onClick={() => setSelectedImage({ src: content, type: 'video' })}
                    >
                        <track kind={ 'captions' } label={ 'No captions' } default={ true }></track>
                    </motion.video>
                    <AnimatePresence>
                        {selectedImage && (
                            <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                                />
                                <motion.video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    layoutId={`media-${selectedImage.src}`}
                                    src={ selectedImage.src }
                                    className="relative max-w-full max-h-[90vh] z-101 object-contain duration-0 rounded-md"
                                    crossOrigin={ 'anonymous' }
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <track kind={ 'captions' } label={ 'No captions' } default={ true }></track>
                                </motion.video>
                            </div>
                        )}
                    </AnimatePresence>
                </section>
            );
        } else {
            return (
                <section className={ classSection }>
                    <motion.img
                        layoutId={`media-${content}`}
                        src={ content }
                        alt={ project.title }
                        loading="eager"
                        onClick={() => setSelectedImage({ src: content, type: 'image' })}
                        className={ classMedia }
                        crossOrigin={ 'anonymous' }
                        fetchPriority={ 'high' }
                    />
                    <AnimatePresence>
                        {selectedImage && (
                            <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                                />
                                <motion.img
                                    layoutId={`media-${selectedImage.src}`}
                                    src={selectedImage.src}
                                    loading="lazy"
                                    className="relative max-w-full max-h-[90vh] z-101 object-contain duration-0 rounded-md"
                                    crossOrigin={ 'anonymous' }
                                    onClick={() => setSelectedImage(null)}
                                />
                            </div>
                        )}
                    </AnimatePresence>
                </section>
            );
        }
    }

    if (project.contents && project.contents.length > 1) {
        let classBasis = '';
        if (project.basis === '1/2') {
            classBasis = 'flex items-center justify-center md:basis-1/2';
        } else if (project.basis === '1/3') {
            classBasis = 'flex items-center justify-center md:basis-1/3';
        } else {
            classBasis = 'flex items-center justify-center';
        }

        const [index, setIndex] = useState(0);
        return (
            <section className="p-0 gap-0">
                <Carousel index={index} onIndexChange={setIndex} disableDrag className="touch-pan-y border-b">
                    <CarouselContent className="active:cursor-grabbing">
                        {(project.contents).map((content, slide) => {
                            const extension = content.split('.').pop().toLowerCase();

                            if (['mp4', 'webm'].includes(extension)) {
                                return (
                                    <CarouselItem key={content} className={classBasis}>
                                        <motion.video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="duration-0"
                                            crossOrigin={ 'anonymous' }
                                            layoutId={`media-${content}`}
                                            src={ content }
                                            onClick={() => setSelectedImage({ src: content, type: 'video' })}
                                            
                                        >
                                            <track kind={ 'captions' } label={ 'No captions' } default={ true }></track>
                                        </motion.video>
                                    </CarouselItem>
                                );
                            } else {
                                return (
                                    <CarouselItem key={content} className={classBasis}>
                                        <motion.img
                                            layoutId={`media-${content}`}
                                            src={ content }
                                            alt={`${project.title} ${slide + 1}`}
                                            loading="eager"
                                            onClick={() => setSelectedImage({ src: content, type: 'image' })}
                                            className="duration-0"
                                            crossOrigin={ 'anonymous' }
                                            fetchPriority={ 'high' }
                                        />
                                    </CarouselItem>
                                );
                            }
                        })}
                    </CarouselContent>
                </Carousel>

                <div className='flex justify-center-safe items-center gap-2 p-2 overflow-x-scroll'>
                    {(project.contents).map((content, slide) => {
                        const isActive = slide === index;
                        const extension = content.split('.').pop().toLowerCase();
                        const classButton = `w-auto h-10 md:h-15 group-hover:brightness-20 ${isActive ? 'brightness-20' : 'brightness-100'}`;

                        if (['mp4', 'webm'].includes(extension)) {
                            return (
                                <button
                                    key={ content }
                                    type='button'
                                    aria-label={`Go to slide ${slide + 1}`}
                                    onClick={() => setIndex(slide)}
                                    className='group p-0 overflow-hidden bg-chart-2'
                                >
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={ classButton }
                                        crossOrigin={ 'anonymous' }
                                        src={`${content}?tr=h-60`}
                                    >
                                        <track kind={ 'captions' } label={ 'No captions' } default={ true }></track>
                                    </video>
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    key={ content }
                                    type='button'
                                    aria-label={`Go to slide ${slide + 1}`}
                                    onClick={() => setIndex(slide)}
                                    className='group p-0 overflow-hidden bg-chart-2'
                                >
                                    <img
                                        src={`${content}?tr=h-60`}
                                        alt={`${project.title} ${slide + 1}`}
                                        loading="eager"
                                        className={ classButton }
                                        crossOrigin= { 'anonymous' }
                                        fetchPriority={ 'high' }
                                    />
                                </button>
                            );
                        }
                    })}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                                className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                            />
                            
                            {selectedImage.type === 'video' ? (
                                <motion.video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    layoutId={`media-${selectedImage.src}`}
                                    src={ selectedImage.src }
                                    className="relative max-w-full max-h-[90vh] z-101 object-contain duration-0 rounded-md"
                                    crossOrigin={ 'anonymous' }
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <track kind={ 'captions' } label={ 'No captions' } default={ true }></track>
                                </motion.video>
                            ) : (
                                <motion.img
                                    layoutId={`media-${selectedImage.src}`}
                                    src={ selectedImage.src }
                                    loading="lazy"
                                    className="relative max-w-full max-h-[90vh] z-101 object-contain duration-0 rounded-md"
                                    crossOrigin={ 'anonymous' }
                                    onClick={() => setSelectedImage(null)}
                                />
                            )}
                        </div>
                    )}
                </AnimatePresence>
            </section>
        );    
    }
}

export function ProjectDetail({ project, dataSvgs }) {
    const path = Assets.arrowLeft.path;
    const viewbox = Assets.arrowLeft.viewbox;
    const classSvg = "size-5 md:size-6 fill-foreground shrink-0 group-open:-rotate-45";
    const classSummary = "flex justify-between items-center cursor-pointer";
    const classDetails = "group py-2";
    const classItem = "inline-flex border shadow gap-1 py-1 px-2 my-1 mr-2 rounded-lg items-center cursor-pointer duration-300 font-bold text-sm md:text-base fill-foreground hover:bg-secondary hover:text-secondary-foreground hover:fill-secondary-foreground";
    const classItemSvg = "size-5 md:size-6";
    
    return (
        <section>
            <div>
                {project.title && (
                    <h2>{ project.title }</h2>
                )}
                {project.type && (
                    <p>{ project.type }</p>
                )}
            </div>
            <span className="flex h-px w-full bg-border"></span>
            <div className="divide-y divide-border -my-2">
                {project.desc && (
                    <details className={ classDetails } open>
                        <summary className={ classSummary }>
                            <h3>Description</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox={ viewbox }
                                role="img"
                                className={ classSvg }
                            >
                                <path d={ path } />
                            </svg>
                        </summary>
                        <p className="py-1 whitespace-pre-line">
                            { project.desc }
                        </p>
                    </details>
                )}
                {project.links && (
                    <details className={ classDetails }>
                        <summary className={ classSummary }>
                            <h3>Links</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox={ viewbox }
                                role="img"
                                className={ classSvg }
                            >
                                <path d={ path } />
                            </svg>
                        </summary>
                        {Object.entries(project.links).map(([placeholder, link]) => (
                            <a
                                key={ link }
                                href={ link }
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={ placeholder }
                                className={ classItem }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox={ Assets.link.viewbox }
                                    className={ classItemSvg }
                                >
                                    <path d={ Assets.link.path } />
                                </svg>
                                { placeholder }
                            </a>
                        ))}
                    </details>
                )}
                {project.tools && dataSvgs && (
                    <details className={ classDetails }>
                        <summary className={ classSummary }>
                            <h3>Tools</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox={ viewbox }
                                role="img"
                                className={ classSvg }
                            >
                                <path d={ path } />
                            </svg>
                        </summary>
                        {dataSvgs.map(dataSvg => (
                            <span
                                key={ dataSvg.name }
                                className={ classItem }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox={ dataSvg.viewbox }
                                    className={ classItemSvg }
                                >
                                    <path d={ dataSvg.path } />
                                </svg>
                                { dataSvg.name }
                            </span>
                        ))}
                    </details>
                )}
                {project.tags && (
                    <details className={ classDetails }>
                        <summary className={ classSummary }>
                            <h3>Tags</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox={ viewbox }
                                role="img"
                                className={ classSvg }
                            >
                                <path d={ path } />
                            </svg>
                        </summary>
                        {(project.tags).map(tag => (
                            <span
                                key={ tag }
                                className={ classItem }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox={ Assets.tag.viewbox }
                                    className={ classItemSvg }
                                >
                                    <path d={ Assets.tag.path } />
                                </svg>
                                { tag }
                            </span>
                        ))}
                    </details>
                )}
            </div>
        </section>
    );
}

export default function ProjectMain() {
    const [ project, setProject ] = useState(null);
    const [ dataSvgs, setDataSvgs ] = useState([]);
    const [ loading , setLoading ] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const urlParams = new URLSearchParams(window.location.search);
                const path = urlParams.get('path');

                const projectData = await get(`projects/${path}`);
                setProject(projectData);

                if (projectData.tools) {
                    const svgs = await get(`tools/${projectData.tools}`);
                    setDataSvgs(svgs);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center border shadow rounded-lg aspect-video">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={ Assets.logo.viewbox }
                    role="img"
                    className="size-12 fill-foreground animate-spin"
                >
                    <path d={ Assets.logo.path } />
                </svg>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex flex-col justify-center items-center border shadow rounded-lg aspect-video">
                <h2>Project not found</h2>
                <a
                    href={ Assets.href.home.path }
                    rel="noopener noreferrer"
                    aria-label= { Assets.href.home.label }
                    className="hover:text-primary text-muted-foreground"
                >
                    Go back to homepage
                </a>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 md:gap-4">
            <ProjectContent project={project} />
            <ProjectDetail project={project} dataSvgs={dataSvgs} />
        </div>
    );
}