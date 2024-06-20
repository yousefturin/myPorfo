import React from 'react';

const useDownloadCV = () => {
    const [isDownloaded, setIsDownloaded] = React.useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/cv.pdf`; 
        link.download = 'Yusef_Rayyan_CV_2024.pdf'; 
        document.body.appendChild(link);
        link.click();
        setIsDownloaded(true);
        document.body.removeChild(link);
    };

    return { handleDownload, isDownloaded };
};

export default useDownloadCV;
