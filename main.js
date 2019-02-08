const tab1 = [1, 15, 25, 78, 58, 45];
fixAge(tab1);
fixAge([18, 3, 30, 22, 11, 60]);
fixAge([1, 3, 3, 2, 11, 6])


function fixAge(tab) {
    const fixageTab = tab.filter((number) => number >= 18 && number <= 60);
    if (fixageTab.length === 0) return console.log('NA');
    console.log(fixageTab);
}