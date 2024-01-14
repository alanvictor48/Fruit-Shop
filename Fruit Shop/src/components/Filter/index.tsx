import styles from './styles.module.css';

type FilterType = {
    _id: number | string
    name: string
}

interface FilterProps {
    filters: FilterType[]
    atualId: number | string
    onChange: (id: any) => void
    all?: string
}

function Filter({ filters, atualId, all, onChange }: FilterProps) {
    return (
        <div className={styles.Filter}>
            { all ? 
                <FilterBox 
                    onClick={() => onChange(-1)} 
                    isActive={atualId === -1} 
                    text={all} /> 
                : <></> 
            }

            { filters?.map(filter => 
                <FilterBox key={filter._id}
                onClick={() => onChange(filter._id)} 
                isActive={atualId === filter._id} 
                text={filter.name} />
            )}
        </div>
    );
}

interface FiterBoxProps extends React.HTMLProps<HTMLDivElement> {
    isActive: boolean,
    text: string
}

function FilterBox({isActive, text, ...rest}: FiterBoxProps) {
    return (
        <div {...rest} className={`${styles.FilterBox} ${isActive && styles.active}`}>
            <span>{ text }</span>
        </div>
    );
}

export default Filter;