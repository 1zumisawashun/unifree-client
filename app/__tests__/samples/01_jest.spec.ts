test("jestの単体テスト", () => {
  expect(1 + 1).toBe(2);

  expect({ foo: "bar" }).toEqual({ foo: "bar" });
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);

  expect(undefined).toBeUndefined();
  expect("foo").toBeDefined();

  expect(true).toBeTruthy();
  expect(false).toBeFalsy();

  expect(null).toBeNull();
  expect("foo").not.toBeNull();

  expect("foo").toHaveLength(3);
  expect([1, 2, 3]).toHaveLength(3);

  expect({ foo: "bar", baz: "hoge" }).toHaveProperty("foo");
  expect(["foo", "bar"]).toContain("foo");
  expect([{ foo: "bar" }, { foo: "hoge" }]).toContainEqual({ foo: "bar" });
  expect("foo12345").toMatch(/foo\d{5}/);
});
