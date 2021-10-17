import { useState, useEffect } from "react";
import { movieActorsReturn } from "../../dados/config";
import { ContainerActors, ContainerImagens, TextActors, TextInfo, ImgActorPhoto } from "../../styles/moviedetails/actors.style";
import Carousel from "../../components/carrousel/carousel";

export default function Actors({ id, apiKey }) {
    const [actor, setActor] = useState();

    useEffect(() => {
        async function getActors(id, apiKey) {
            return setActor(await movieActorsReturn(id, apiKey));
        }
        getActors(id, apiKey);
    }, [])

    if (actor === undefined) return <></>;
    return (
        <>
            <TextActors>ELENCO</TextActors>
            <ContainerActors>
                <Carousel show={5}>
                    {
                        actor.cast.map((actors) => {
                            return (
                                <div key={actors.name} >
                                    <ContainerImagens >
                                        <ImgActorPhoto src={actors.profile_path === null ? "/img/nophoto.jpg" : "https://image.tmdb.org/t/p/w185" + actors.profile_path} alt={actors.name} />
                                        <TextInfo F="24" bold nohover>{actors.name}</TextInfo>
                                        <TextInfo grey nohover>{actors.character}</TextInfo>
                                    </ContainerImagens>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </ContainerActors>
        </>
    )
}



