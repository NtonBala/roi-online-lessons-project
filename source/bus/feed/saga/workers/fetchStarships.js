// Core
import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

// Instruments
import { feedActions } from '../../actions';

export function* fetchStarships () {
    try {
        yield put(feedActions.startFetching());

        // const response = yield call(fetch, 'http://swapi.co/api/starships', {
        //     method: 'GET',
        //     //mode:   'no-cors',
        // });

        // const { results } = yield call([response, response.json]);

        // if (response.status !== 200) {
        //     throw new Error(`We can't receive starships 😔`);
        // }

        yield delay(2000);
        const results = [
            {
                name:           'Executor',
                starship_class: 'Star dreadnought',
                manufacturer:   'Kuat Drive Yards, Fondor Shipyards',
                crew:           279144,
            },
            {
                name:           'Sentinel-class landing craft',
                starship_class: 'Landing craft',
                manufacturer:   'Sienar Fleet Systems, Cyngus Spaceworks',
                crew:           5,
            },
            {
                name:           'Death Star',
                starship_class: 'Deep Space Mobile Battlestation',
                manufacturer:   'Imperial Department of Military Research, Sienar Fleet Systems',
                crew:           342953,
            },
            {
                name:           'Millenium Falcon',
                starship_class: 'Light firefighter',
                manufacturer:   'Corellian Engineering Corporation',
                crew:           4,
            },
            {
                name:           'Y-wing',
                starship_class: 'Assault starfighter',
                manufacturer:   'Koensayr Manufacturing',
                crew:           2,
            }
        ];

        yield put(feedActions.fillStarships(results));
    } catch (error) {
        console.log('fetchStarshipsAsync', error);
    } finally {
        yield put(feedActions.stopFetching());
    }
}
