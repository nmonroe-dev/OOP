# Contractors at 100Devs

This project simulates a team of contractors at 100Devs, with different roles and pay rates.

## Overview

In this project, we have defined a parent class `Contractor` and two child classes `FrontEnd` and `BackEnd` which extend the `Contractor` class. Each contractor has a name, role, and pay rate.

## Classes

### Contractor

The `Contractor` class represents a generic contractor at 100Devs.

#### Properties

- `_name`: The name of the contractor.
- `_role`: The role of the contractor.

#### Methods

- `get name()`: Returns the name of the contractor.
- `get role()`: Returns the role of the contractor.
- `sayHey()`: Prints a message with the contractor's name and role.

### FrontEnd

The `FrontEnd` class represents a front-end developer contractor at 100Devs.

#### Properties

- `_pay`: The pay rate of the front-end developer.

#### Methods

- `get pay()`: Returns the pay rate of the front-end developer.
- `sayHey()`: Overrides the `sayHey()` method of the `Contractor` class to include pay rate.

### BackEnd

The `BackEnd` class represents a back-end developer contractor at 100Devs.

#### Properties

- `_pay`: The pay rate of the back-end developer.

#### Methods

- `get pay()`: Returns the pay rate of the back-end developer.
- `sayHey()`: Overrides the `sayHey()` method of the `Contractor` class to include pay rate.

## Usage

```javascript
let nathan = new Contractor("Nathan", "Badass");
let jack = new FrontEnd("Jack", "Frontend", "$250/hour");
let bob = new BackEnd("Bob", "Backend", "$180/hour");

let team = [nathan, jack, bob];

for (let person of team) {
  person.sayHey();
}
```
