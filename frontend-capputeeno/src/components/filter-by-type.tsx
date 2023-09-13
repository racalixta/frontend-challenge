import styled from "styled-components"

interface FilterByTypeProps {

}

interface FilterItemProps {
  selected: boolean
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`
const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${props => props.selected ? '600' : '400'};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--text-dark);
  border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''}
`

export function FilterByType(props: FilterByTypeProps) {
  return (
    <FilterList>
      {/* <FilterItem>Todos os Produtos</FilterItem>
      <FilterItem>Camisetas</FilterItem>
      <FilterItem>Canecas</FilterItem> */}
    </FilterList>
  )
}
