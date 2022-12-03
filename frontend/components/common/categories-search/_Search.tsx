import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { SearchProps } from "./CategoriesSearch";

export const Search = ({ inputValue, onChangeInput: setInputValue }: SearchProps) => {
  return (
    <Autocomplete
      placeholder="Search"
      style={{ width: "80%", maxWidth: "570px" }}
      icon={<IconSearch size={16} stroke={1.5} />}
      data={[]}
      value={inputValue}
      onChange={setInputValue}
    />
  );
};
