import { TextTrailer, ContainerImagens, ImgPosterAll } from "../../styles/moviedetails/posters.style"
import Carousel from "../../components/carrousel/carousel";

export default function Poster({ postersImg }) {

    return (
        <>
            <TextTrailer F="40" >CARTAZES</TextTrailer>
            <Carousel show={5}>
                {
                    postersImg.posters.map((poster) => {
                        return (
                            <ContainerImagens key={poster.file_path} >
                                <ImgPosterAll src={"https://image.tmdb.org/t/p/w185" + poster.file_path} alt="POSTER" />
                            </ContainerImagens>
                        )
                    })
                }
            </Carousel>
        </>
    )
}