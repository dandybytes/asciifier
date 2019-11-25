import React, {useContext} from "react";
import {Context} from "../../context/Context";
import Menu from "../common/Menu";
import FileUpload from "../FileUpload";
import Canvas from "../Canvas";
import Output from "../Output";
import CustomButton from "../common/CustomButton";
import Benchmark from "../Benchmark";
import "./ImagePage.scss";

const ImagePage = () => {
    let {uploadedImage, setUploadedImage, setGrayscalePixelMap} = useContext(Context);

    return (
        <div className="image-page">
            <Menu />
            <Benchmark />
            <main>
                <Canvas />
                <Output />
                {uploadedImage === null ? (
                    <FileUpload />
                ) : (
                    <>
                        <CustomButton
                            onClick={event => {
                                event.preventDefault();
                                setUploadedImage(null);
                                setGrayscalePixelMap("");
                            }}
                        >
                            Upload Another Image
                        </CustomButton>
                    </>
                )}
            </main>
        </div>
    );
};

export default ImagePage;
