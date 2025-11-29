function selectionSortDetailed(arr: number[]): number[] {
    const n = arr.length;
    const sorted = [...arr];
    
    console.log("Исходный массив:", [...sorted]);
    console.log("--- Начинаем сортировку ---");
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        console.log(`\n🔍 Итерация ${i + 1}:`);
        console.log(`Ищем минимальный в [${sorted.slice(i)}]`);
        
        // Поиск минимального элемента
        for (let j = i + 1; j < n; j++) {
            if (sorted[j] < sorted[minIndex]) {
                console.log(`Нашли новый минимум: ${sorted[j]} (индекс ${j})`);
                minIndex = j;
            }
        }
        
        // Обмен местами
        if (minIndex !== i) {
            console.log(`🔄 Меняем ${sorted[i]} и ${sorted[minIndex]}`);
            [sorted[i], sorted[minIndex]] = [sorted[minIndex], sorted[i]];
        } else {
            console.log(`✅ Минимальный элемент уже на месте`);
        }
        
        console.log(`Текущее состояние: [${sorted}]`);
    }
    
    console.log("\n🎉 Отсортированный массив:", sorted);
    return sorted;
}