import {CardsList} from "../../components/CardsList/CardsList";
import {useDispatch} from "react-redux";
import React, {useCallback, useEffect} from "react";
import {Action} from "../../store/starships";
import {loadStarships} from "../../api/starships";
import {Header} from "../../components/Header/Header";

export const MainPage = () => {
  const dispatch = useDispatch();
  const dispatchAction = useCallback(
    (action: Action) => {
      dispatch(action);
    },
    [dispatch]
  );


  const loadStarshipsToState = useCallback(() => {
    loadStarships()
      .then((starships) => {
        dispatchAction({type: "StarshipsLoaded", value: starships});
      })
      .catch((err) => {
        dispatchAction({type: "FailedToLoad", value: err.toString()});
      });
  }, [dispatchAction]);

  const getStarships = useCallback(() => {
    dispatchAction({type: "StarshipsLoading"});
    loadStarshipsToState();
  }, [dispatchAction, loadStarshipsToState]);

  useEffect(() => {
    getStarships();
    // let timerId = setInterval(loadNewsToState, 60000);
    // return () => {
    //   clearInterval(timerId);
    // };
  }, [getStarships]);

  return (
    <>
      <Header/>
      <CardsList></CardsList>
    </>
  )
}
