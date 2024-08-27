import Select from "react-select";

export default function SortingFilter({ setSortBy, options }) {
  return (
    <section className="sorting">
      <Select
        onChange={(options) => setSortBy(options.value)}
        defaultValue={options[0]}
        options={options}
      />
    </section>
  );
}
