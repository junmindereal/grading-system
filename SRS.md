# Software Requirements Specification

## For Seventy Five (A Grading System)

Version 1.0.0
Prepared by Junmin De Real
March 4, 2020

# Table of Contents

- [Revision History](#revision-history)
- 1 [Introduction](#1-introduction)
  - 1.1 [Document Purpose](#11-document-purpose)
  - 1.2 [Product Scope](#12-product-scope)
  - 1.3 [Definitions, Acronyms and Abbreviations](#13-definitions-acronyms-and-abbreviations)
  - 1.4 [References](#14-references)
  - 1.5 [Document Overview](#15-document-overview)
- 2 [Product Overview](#2-product-overview)
  - 2.1 [Product Perspective](#21-product-perspective)
  - 2.2 [Product Functions](#22-product-functions)
  - 2.3 [Product Constraints](#23-product-constraints)
  - 2.4 [User Characteristics](#24-user-characteristics)
  - 2.5 [Assumptions and Dependencies](#25-assumptions-and-dependencies)
  - 2.6 [Apportioning of Requirements](#26-apportioning-of-requirements)
- 3 [Requirements](#3-requirements)
  - 3.1 [External Interfaces](#31-external-interfaces)
    - 3.1.1 [User Interfaces](#311-user-interfaces)
    - 3.1.2 [Hardware Interfaces](#312-hardware-interfaces)
    - 3.1.3 [Software Interfaces](#313-software-interfaces)
  - 3.2 [Functional](#32-functional)
  - 3.3 [Quality of Service](#33-quality-of-service)
    - 3.3.1 [Performance](#331-performance)
    - 3.3.2 [Security](#332-security)
    - 3.3.3 [Reliability](#333-reliability)
    - 3.3.4 [Availability](#334-availability)
  - 3.4 [Compliance](#34-compliance)
  - 3.5 [Design and Implementation](#35-design-and-implementation)
    - 3.5.1 [Installation](#351-installation)
    - 3.5.2 [Distribution](#352-distribution)
    - 3.5.3 [Maintainability](#353-maintainability)
    - 3.5.4 [Reusability](#354-reusability)
    - 3.5.5 [Portability](#355-portability)
    - 3.5.6 [Cost](#356-cost)
    - 3.5.7 [Deadline](#357-deadline)
    - 3.5.8 [Proof of Concept](#358-proof-of-concept)
- 4 [Verification](#4-verification)
- 5 [Appendixes](#5-appendixes)

## Revision History

| Name | Date | Reason For Changes | Version |
| ---- | ---- | ------------------ | ------- |
|      |      |                    |         |
|      |      |                    |         |
|      |      |                    |         |

## 1. Introduction

### 1.1 Document Purpose

The purpose of this document is to create a basis for Seventy Five functionalities and requirements.

### 1.2 Product Scope

The purpose of Seventy Five is to create a convinient and easy-to-use application for users, grading their students. The user will be able to add grades, see lists of students and their grades, generate reports, and can easily see an overview of students progress based on their grades. The System is based on MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS). The System intends to provide an intuitive and comfortable user experience.

### 1.3 Definitions, Acronyms and Abbreviations

| Abbreviations | Definitions                                                             |
| :------------ | :---------------------------------------------------------------------- |
| HTML          | Hypertext Markup Language                                               |
| CSS           | Cascading Style Sheet                                                   |
| JS            | JavaScript                                                              |
| React         | A JavaScript library for building user interfaces                       |
| DBMS          | Database Management System                                              |
| MongoDB       | open source DBMS that uses a document-oriented database model           |
| NodeJS        | Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. |
| Express       | A web framework for Node.js                                             |
| Seventy Five  | An online grading system                                                |
| System        | Online Grading System                                                   |

### 1.4 References

- [TailwindCSS](https://tailwindcss.com/) A utility-first CSS framework for rapidly building custom designs.

### 1.5 Document Overview

The document is organized in the following sections:

- Product Overivew - which describes the general factors that affect the product and its requirements.
- Requirements - which specify all of the software requirements to a level of detail sufficient to enable designers to design a software system to satisfy those requirements, and to enable testers to test that the software system satisfies those requirements.
- Verification - which provides the verification approaches and methods planned to qualify the software. The purpose of the verification process is to provide objective evidence that a system or system element fulfills its specified requirements and characteristics.

## 2. Product Overview

### 2.1 Product Perspective

The product is supposed to be an open source, under the MIT License. It is a web based system. The Seventy Five System provides simple mechanism for users to add grades to their students.

### 2.2 Product Functions

The following are the main features that are included in Seventy Five

- Cross platform support: Offers operating support for most of the known and commercial operating systems.
- User account: The system allows the user to create their accounts in the system and provide features of updating and viewing profiles.
- Number of users being supported by the system: Though the number is precisely not mentioned but the system is able to support a large number of online users at a time.
- Search: search is simply local search engine based on key words.
- Grading System: Allows user to add grades to their students.
- Reports: Allows user to generate reports.
- FAQs section: Frequently asked section contain answer of problem which Seventy Five user frequently faced.

### 2.3 Product Constraints

This system is provisioned to be built on the React framework which is highly flexible. MongoDB will be the DBMS and will be used together with ExpressJS, using NodeJS. TailwindCSS will be used for CSS framework and will follow their default Design System.

### 2.4 User Characteristics

It is considered that the user do have the basic knowledge of operating the internet and to have access to it. The administrator is expected to be familiar with the interface of the tech support system.

### 2.5 Assumptions and Dependencies

This software highly depends on type and version of browser being installed in the system i.e. browser version should be used which have HTML5 support.

### 2.6 Apportioning of Requirements

In the case that the project is delayed, there are some requirements that could be transferred to the next version of the application. Those requirements are to be developed in the seconde release

## 3. Requirements

### 3.1 External Interfaces

##### Web Server

- Node Js

##### Javascript Application

- The actual program that will perform the operations is written in JavaScript. All data will be stored in a database.

##### MongoDB Database

- It’s an open source document NoSQL database to store all data which communicates with the
  application on the server.

#### 3.1.1 User interfaces

The new system shall provide a very intuitive and simple interface to the user and the administrator, so that the user can easily navigate through pages, assignments, groups and sub-groups, share data and the administrator can easily manage groups and revoke user permissions.

#### 3.1.2 Hardware interfaces

##### ServerSide

- The web application will be hosted on a web server which is listening on the web
  standard port, port 80.

##### Client Side

- Monitor screen – the software shall display information to the user via the monitor
  screen
- Mouse – the software shall interact with the movement of the mouse and the mouse buttons. The mouse shall activate areas for data input, command buttons and select options from menus.
- Keyboard – the software shall interact with the keystrokes of the keyboard. The keyboard will input data into the active area of the database.

#### 3.1.3 Software interfaces

##### Server side

- A NodeJS web server will accept all requests from the client and forward it
  accordingly. A database will be hosted centrally using MongoDB.

##### Client side

- An OS which is capable of running a modern web browser which supports JavaScript and HTML5.

### 3.2 Functional

##### User Login

|                |                                                |
| :------------- | :--------------------------------------------- |
| Purpose        | User logs in to system using existing profile. |
| User           | A user with an existing profile.               |
| Input Data     | Profile username and password.                 |
| Output Data    | Corresponding page data.                       |
| Invariants     | Profile table data and user information.       |
| Pre-conditions | User is not logged in to a profile,            |
|                | input profile exists in data base,             |
|                | user password matches profile                  |

### 3.3 Quality of Service

#### 3.3.1 Performance

If there are performance requirements for the product under various circumstances, state them here and explain their rationale, to help the developers understand the intent and make suitable design choices. Specify the timing relationships for real time systems. Make such requirements as specific as possible. You may need to state performance requirements for individual functional requirements or features.

#### 3.3.2 Security

Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.

#### 3.3.3 Reliability

Specify the factors required to establish the required reliability of the software system at time of delivery.

#### 3.3.4 Availability

Specify the factors required to guarantee a defined availability level for the entire system such as checkpoint, recovery, and restart.

### 3.4 Compliance

Specify the requirements derived from existing standards or regulations, including:

- Report format
- Data naming
- Accounting procedures
- Audit tracing

For example, this could specify the requirement for software to trace processing activity. Such traces are needed for some applications to meet minimum regulatory or financial standards. An audit trace requirement may, for example, state that all changes to a payroll database shall be recorded in a trace file with before and after values.

### 3.5 Design and Implementation

#### 3.5.1 Installation

Constraints to ensure that the software-to-be will run smoothly on the target implementation platform.

#### 3.5.2 Distribution

Constraints on software components to fit the geographically distributed structure of the host organization, the distribution of data to be processed, or the distribution of devices to be controlled.

#### 3.5.3 Maintainability

Specify attributes of software that relate to the ease of maintenance of the software itself. These may include requirements for certain modularity, interfaces, or complexity limitation. Requirements should not be placed here just because they are thought to be good design practices.

#### 3.5.4 Reusability

<!-- TODO: come up with a description -->

#### 3.5.5 Portability

Specify attributes of software that relate to the ease of porting the software to other host machines and/or operating systems.

#### 3.5.6 Cost

Specify monetary cost of the software product.

#### 3.5.7 Deadline

Specify schedule for delivery of the software product.

#### 3.5.8 Proof of Concept

<!-- TODO: come up with a description -->

## 4. Verification

> This section provides the verification approaches and methods planned to qualify the software. The information items for verification are recommended to be given in a parallel manner with the requirement items in Section 3. The purpose of the verification process is to provide objective evidence that a system or system element fulfills its specified requirements and characteristics.

<!-- TODO: give more guidance, similar to section 3 -->
<!-- ieee 15288:2015 -->

## 5. Appendixes
