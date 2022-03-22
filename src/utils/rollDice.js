export default function rollDice(die) {
    let num;
    switch (die) {
        case 'd2':
            num = 2;
            break;
        case 'd4':
            num = 4;
            break;
        case 'd6':
            num = 6;
            break;
        case 'd8':
            num = 8;
            break;
        case 'd10':
            num = 10;
            break;
        case 'd12':
            num = 12;
            break;
        case 'd20':
            num = 20;
            break;
        default:
            break;
    }
    return Math.floor((Math.random() * num) + 1);
};