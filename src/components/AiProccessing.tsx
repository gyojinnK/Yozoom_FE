import Box from "@/UI/Box";
import layoutCss from "@/styles/layout.module.css";
import textCss from "@/styles/text.module.css";
import aiCss from "@/styles/AiProccessing.module.css";
import Image from "next/image";
import aiImg from "@/../public/img/aiProcessing.png";
import InputBox from "@/UI/InputBox";

const AiProccessing = () => {
    return (
        <Box>
            <div className={`${layoutCss.flexBox}`} style={{ height: "100px" }}>
                <div className={aiCss.aiTiaie}>
                    <Image
                        src={aiImg}
                        alt="logo"
                        width={60}
                        style={{ marginRight: "10px" }}
                    />
                    <div>
                        <dt
                            className={`${textCss.title} ${textCss.dt} ${layoutCss.daiayout}`}
                        >
                            관심도 예측
                        </dt>
                        <dd className={`${textCss.dd} ${layoutCss.ddLayout}`}>
                            키워드의 미래 관심도를 예측하세요.
                        </dd>
                    </div>
                </div>
                <InputBox>
                    <form className={aiCss.aiForm}>
                        <p className={aiCss.aiP}>키워드를 입력하세요.</p>
                        <input
                            className={aiCss.aiInput}
                            placeholder="ex) 강교진"
                        ></input>
                    </form>
                </InputBox>
            </div>
        </Box>
    );
};

export default AiProccessing;
