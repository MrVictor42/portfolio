class Person(
    var name: String, var age: Int, var gender: Gender
) {

    override fun toString(): String {
        return "Person{" +
                "name = " + name + ", " +
                "age = " + age + ", " +
                "gender = " + gender +
                "}"
    }
}