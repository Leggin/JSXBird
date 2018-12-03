class Utilities {
    static limit(vec, val) {
        return Math.min(Math.max(vec, -val), val);
    }
    static rand(min, max) {
        return (Math.random() * (max - min)) + min;
    }

}