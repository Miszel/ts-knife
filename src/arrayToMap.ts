export const toMap = <Type, KeyType, ValueType>(
    arr: Array<Type>, 
    getKey : (e: Type) => KeyType, 
    toVal : (e:Type) => ValueType 
    ) : Map<KeyType, Array<ValueType>> => {

    const reducer = ( acc : Map<KeyType, Array<ValueType>>, element: Type ) : Map<KeyType, ValueType[]> => {
        const key: KeyType = getKey(element);
        const oldValue = acc.get(key);
        
        const newValue : Array<ValueType> = (oldValue ? oldValue : new Array<ValueType>()).concat(toVal(element));
        acc.set(key, newValue);
        return acc;
    }

    return arr.reduce(reducer, new Map<KeyType, Array<ValueType>>())
}