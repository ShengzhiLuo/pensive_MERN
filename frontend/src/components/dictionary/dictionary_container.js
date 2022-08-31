import { connect } from "react-redux";
import { lookupWord,
} from "../../actions/dictionary_actions";
import {
    resetQueries,
} from "../../actions/query_actions";
import Dictionary from './dictionary';

const mapStateToProps = (state) => {
    return {
        // tweets: Object.values(state.tweets.all),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        lookupWord: (query) => dispatch(lookupWord(query)),
        resetQueries: (query) => dispatch(resetQueries(query)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);