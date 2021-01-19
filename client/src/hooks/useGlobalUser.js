import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import signinService from "../services/signin";
import getWatchingListService from "../services/getWatchingList";

export default function useGlobalUser() {
  const { user, setUser, watchingList, setWatchingList } = useContext(Context);
  const [state, setState] = useState({ isLoaded: false, error: false });

  const login = useCallback(
    ({ id, password, img_profile, username }) => {
      signinService({ id, password })
        .then((token) => {
          setState({ isLoaded: true, error: false });
          setUser({ token, img_profile, username });
        })
        .catch((err) => {
          setState({ isLoaded: true, error: true });
        });
    },
    [setUser]
  );

  const getWatchingList = useCallback(() => {
    if (!user) return;

    getWatchingListService({ token: user.token })
      .then((result) => {
        setWatchingList(result);
      })
      .catch(() => {
        setWatchingList(null);
      });
  }, [setWatchingList, user]);

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const getTimeMovie = useCallback(
    ({ id }) => {
      let time = 0;
      let duration = 0;

      if (watchingList) {
        const movieFound = watchingList.watching_movies.find(
          (movie) => movie.id === parseInt(id, 10)
        );
        if (movieFound) {
          time = movieFound.time;
          duration = movieFound.duration;
        }
      }

      return { time, duration };
    },
    [watchingList]
  );

  return {
    isLogged: Boolean(user),
    isLoginLoaded: state.isLoaded,
    isLoginError: state.error,
    login,
    logout,
    getWatchingList,
    getTimeMovie,
    watchingList,
    user,
  };
}
