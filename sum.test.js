const targetFn = require("./sum");

test("1 + 1 = 2", () => {
    // Condition
    const n1 = 1;
    const n2 = 1;

    // Trigger Test
    const result = targetFn(n1, n2);

    // Assert result
    expect(result).toBe(2); // To fail the test, change update code to `.toBe(3)`
})

test("1 + a = null", () => {
    // Condition
    const n1 = 1;
    const n2 = "a";

    // Trigger Test
    const result = targetFn(n1,n2);
    
    // Assert result
    expect(result).toBeNaN();
})