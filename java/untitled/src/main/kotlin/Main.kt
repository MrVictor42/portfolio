import java.util.stream.Collectors

fun main() {
    val people: List<Person> = getPeople()
    val females: List<Person> = arrayListOf()

    System.err.println("Apenas Mulheres")
    people.stream().filter { person ->
        person.gender == Gender.FEMALE
    }.forEach(System.out::println)

    println()
    println("Amostras por idade")
    people.stream().sorted(Comparator.comparing(Person::age)).forEach(System.out::println)

    println()
    println("Amostras por idade ao reverso")
    people.stream().sorted(Comparator.comparing(Person::age).reversed()).forEach(System.out::println)

    println()
    println("Amostras por nome")
    people.stream().sorted(Comparator.comparing(Person::name)).forEach(System.out::println)

    println()
    println("All Match")
    val allMatch: Boolean = people.stream().allMatch { person ->
        person.age > 8
    }
    println(allMatch)

    println()
    println("Any Match")
    val anyMatch: Boolean = people.stream().anyMatch { person ->
        person.age > 8
    }
    println(anyMatch)

    println()
    println("None Match")
    val noneMatch: Boolean = people.stream().noneMatch { person ->
        person.name == "Antonio"
    }
    println(noneMatch)

    println()
    println("Max: A pessoa mais velha da lista")
    people.stream().max(Comparator.comparing(Person::age)).ifPresent(System.out::println)

    println()
    println("Max: A pessoa mais nova da lista")
    people.stream().min(Comparator.comparing(Person::age)).ifPresent(System.out::println)

    println()
    println("Por grupos")
    val groupByGender: Map<Gender, List<Person>> = people.stream().collect(Collectors.groupingBy(Person::gender))

    groupByGender.forEach { (gender, people) ->
        println(gender)
        people.forEach(System.out::println)
        println()
    }
}
private fun getPeople() : List<Person>  {
    return listOf(
        Person("James Bond", 20, Gender.MALE),
        Person("Alina Smith", 33, Gender.FEMALE),
        Person("Helen White", 57, Gender.FEMALE),
        Person("Alex Boz", 14, Gender.MALE),
        Person("Jamie Goa", 99, Gender.MALE),
        Person("Anna Cook", 7, Gender.FEMALE),
        Person("Zelda Brown", 120, Gender.FEMALE),
    )
}