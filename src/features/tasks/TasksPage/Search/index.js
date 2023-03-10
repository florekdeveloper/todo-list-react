import { StyledForm } from "../../Form/styled";
import Input from "../../Input"
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";


const Search = () => {

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (

        <StyledForm>
            <Input
                placeholder="Szukaj zadań"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledForm>
    )
};

export default Search;