import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface StudentProps {
  name: string
  email: string
  password: string
}

export class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.name
  }

  get password() {
    return this.props.name
  }

  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }
}
