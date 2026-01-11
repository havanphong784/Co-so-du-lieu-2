// Multiple Choice Questions Data
const mcqData = [
    {
        id: 171,
        category: "Exam DB01",
        question: "How many JDBC driver types does Sun define?",
        options: {
            A: "Four",
            C: "Two",
            B: "Three",
            D: "One"
        },
        answer: "A",
        source: "De thi DB01 Cau 1"
    },
    {
        id: 172,
        category: "Exam DB01",
        question: "What SQL structure is used to limit column values of a table?",
        options: {
            A: "The LIMIT constraint",
            C: "The VALUE constaint",
            B: "The COUNT constaint",
            D: "The CHECK constraint"
        },
        answer: "D",
        source: "De thi DB01 Cau 2"
    },
    {
        id: 173,
        category: "Exam DB01",
        question: "Which of the following statements is true concerning routines and triggers?",
        options: {
            A: "Both have to be called to operate.",
            C: "Both consist of procedural code.",
            B: "Both are stored in the database.",
            D: "Both run automatically."
        },
        answer: "B",
        source: "De thi DB01 Cau 3"
    },
    {
        id: 174,
        category: "Exam DB01",
        question: "Data administrators are responsible for:",
        options: {
            A: "Writing application programs.",
            C: "Overall management of data resources in an organization.",
            B: "Managing technical issues in the database environment.",
            D: "Physical database design."
        },
        answer: "C",
        source: "De thi DB01 Cau 4"
    },
    {
        id: 175,
        category: "Exam DB01",
        question: "When assessing the table structure of an acquired set of tables with data, determining foreign keys is (part of) the:",
        options: {
            A: "Fourth step",
            C: "Third step",
            B: "Second step",
            D: "First step"
        },
        answer: "C",
        source: "De thi DB01 Cau 5"
    },
    {
        id: 176,
        category: "Exam DB01",
        question: "An attribute that names or identifies entity instances is a(n):",
        options: {
            A: "Identifier",
            C: "Attribute"
        },
        answer: "A",
        source: "De thi DB01 Cau 6"
    },
    {
        id: 177,
        category: "Exam DB01",
        question: "SQL stands for ________ .",
        options: {
            A: "Structured Query Language",
            C: "Structured Question Language",
            B: "Sequential Question Language",
            D: "Sequential Query Language"
        },
        answer: "A",
        source: "De thi DB01 Cau 7"
    },
    {
        id: 178,
        category: "Exam DB01",
        question: "SQL data definition commands make up a(n) ________ .",
        options: {
            A: "HTML",
            C: "DDL"
        },
        answer: "C",
        source: "De thi DB01 Cau 8"
    },
    {
        id: 179,
        category: "Exam DB01",
        question: "A relational database consists of a collection of",
        options: {
            A: "Fields",
            C: "Tables",
            B: "Keys",
            D: "Records"
        },
        answer: "C",
        source: "De thi DB01 Cau 9"
    },
    {
        id: 180,
        category: "Exam DB01",
        question: "________ was adopted as a national standard by ANSI in 1992.",
        options: {
            A: "Microsoft Access",
            C: "DBase",
            B: "SQL",
            D: "Oracle"
        },
        answer: "B",
        source: "De thi DB01 Cau 10"
    },
    {
        id: 181,
        category: "Exam DB01",
        question: "One solution to the multivalued dependency constraint problem is to:",
        options: {
            A: "Split the relation into two relations, each with a single theme.",
            C: "Change the theme."
        },
        answer: "A",
        source: "De thi DB01 Cau 11"
    },
    {
        id: 182,
        category: "Exam DB01",
        question: "The DROP TABLE statement:",
        options: {
            A: "Deletes the table structure along with the table data.",
            C: "Is not an SQL statement.",
            B: "Deletes the table structure only.",
            D: "Works whether or not referential integrity constraints would be violated."
        },
        answer: "A",
        source: "De thi DB01 Cau 12"
    },
    {
        id: 183,
        category: "Exam DB01",
        question: "Properties that describe the characteristics of entities are called:",
        options: {
            A: "Entities",
            C: "Attributes",
            B: "Identifers",
            D: "Relationships"
        },
        answer: "C",
        source: "De thi DB01 Cau 13"
    },
    {
        id: 184,
        category: "Exam DB01",
        question: "Views constructed from SQL SELECT statements that conform to the SQL-92 standard may not contain:",
        options: {
            A: "ORDER BY",
            C: "GROUP BY",
            B: "WHERE",
            D: "FROM"
        },
        answer: "A",
        source: "De thi DB01 Cau 14"
    },
    {
        id: 185,
        category: "Exam DB01",
        question: "Metadata enables database designers and users to do all of the following except:",
        options: {
            A: "What the data mean",
            C: "What the fine distinctions are between similar data items.",
            B: "Understand what data exist",
            D: "Sample data"
        },
        answer: "D",
        source: "De thi DB01 Cau 15"
    },
    {
        id: 186,
        category: "Exam DB01",
        question: "Entities can be associated with one another in which of the following?",
        options: {
            A: "Relationships",
            C: "Entities"
        },
        answer: "A",
        source: "De thi DB01 Cau 16"
    },
    {
        id: 187,
        category: "Exam DB01",
        question: "The SQL statement to create a view is:",
        options: {
            A: "CREATE VIEW",
            C: "MAKE VIEW",
            B: "NEW VIEW",
            D: "INSERT VIEW"
        },
        answer: "A",
        source: "De thi DB01 Cau 17"
    },
    {
        id: 188,
        category: "Exam DB01",
        question: "Which of the following is a group of one or more attributes that uniquely identifies a row?",
        options: {
            A: "Tuple",
            C: "Relation"
        },
        answer: "B",
        source: "De thi DB01 Cau 18"
    },
    {
        id: 189,
        category: "Exam DB01",
        question: "Embedded SQL is which of the following?",
        options: {
            A: "Hard-coded SQL statements in a procedure.",
            C: "Hard-coded SQL statements in a trigger."
        },
        answer: "B",
        source: "De thi DB01 Cau 19"
    },
    {
        id: 190,
        category: "Exam DB01",
        question: "A view is which of the following?",
        options: {
            A: "A virtual table that can be accessed via SQL commands",
            C: "A virtual table that cannot be accessed via SQL commands"
        },
        answer: "A",
        source: "De thi DB01 Cau 20"
    },
    {
        id: 191,
        category: "Exam DB01",
        question: "Which one of the following sorts rows in SQL?",
        options: {
            A: "ALIGN BY",
            C: "SORT BY",
            B: "ORDER BY",
            D: "GROUP BY"
        },
        answer: "B",
        source: "De thi DB01 Cau 21"
    },
    {
        id: 192,
        category: "Exam DB01",
        question: "A ________ in a table represents a relationship among a set of values.",
        options: {
            A: "Row",
            B: "Column",
            C: "Key",
            D: "Entry"
        },
        answer: "A",
        source: "De thi DB01 Cau 22"
    },
    {
        id: 193,
        category: "Exam DB01",
        question: "What is an SQL virtual table that is constructed from other tables?",
        options: {
            A: "Another table",
            C: "A relation",
            B: "Query results",
            D: "A view"
        },
        answer: "D",
        source: "De thi DB01 Cau 23"
    },
    {
        id: 194,
        category: "Exam DB01",
        question: "Which one of the following is a procedural language?",
        options: {
            A: "Tuple relational calculus",
            C: "Domain relational calculus"
        },
        answer: "B",
        source: "De thi DB01 Cau 24"
    },
    {
        id: 195,
        category: "Exam DB01",
        question: "A subquery in an SQL SELECT statement:",
        options: {
            A: "Cannot have its results sorted using ORDER BY.",
            C: "Can only be used with two tables.",
            B: "Has a distinct form that cannot be duplicated by a join.",
            D: "Can always be duplicated by a join."
        },
        answer: "A",
        source: "De thi DB01 Cau 25"
    },
    {
        id: 196,
        category: "Exam DB01",
        question: "The result of a SQL SELECT statement is a(n) ________ .",
        options: {
            A: "table",
            B: "file",
            C: "report",
            D: "form"
        },
        answer: "A",
        source: "De thi DB01 Cau 26"
    },
    {
        id: 197,
        category: "Exam DB01",
        question: "You can add a row using SQL in a database with which of the following?",
        options: {
            A: "INSERT",
            B: "MAKE",
            C: "CREATE",
            D: "NEW"
        },
        answer: "A",
        source: "De thi DB01 Cau 27"
    },
    {
        id: 198,
        category: "Exam DB01",
        question: "When three or more AND and OR conditions are combined, it is easier to use the SQL keyword(s):",
        options: {
            A: "IN",
            C: "NOT IN",
            B: "LIKE",
            D: "IN and NOT IN"
        },
        answer: "D",
        source: "De thi DB01 Cau 28"
    },
    {
        id: 199,
        category: "Exam DB01",
        question: "Using the SQL GROUP BY phrase with a SELECT statement can help detect which of the following problems?",
        options: {
            A: "The general-purpose remarks column problem",
            C: "The inconsistent values problem",
            B: "The missing values problem",
            D: "The multivalue, multicolumn problem"
        },
        answer: "D",
        source: "De thi DB01 Cau 29"
    },
    {
        id: 200,
        category: "Exam DB01",
        question: "The command to eliminate a table from a database is:",
        options: {
            A: "REMOVE TABLE CUSTOMER;",
            C: "DELETE TABLE CUSTOMER;",
            B: "DROP TABLE CUSTOMER;",
            D: "UPDATE TABLE CUSTOMER;"
        },
        answer: "B",
        source: "De thi DB01 Cau 30"
    },
    {
        id: 201,
        category: "Exam DB01",
        question: "Using which language can a user request information from a database?",
        options: {
            A: "Query",
            C: "Relational"
        },
        answer: "A",
        source: "De thi DB01 Cau 31"
    },
    {
        id: 202,
        category: "Exam DB01",
        question: "Table is synonymous with the term:",
        options: {
            A: "Record",
            C: "Relation",
            B: "Column",
            D: "Field"
        },
        answer: "C",
        source: "De thi DB01 Cau 32"
    },
    {
        id: 203,
        category: "Exam DB01",
        question: "The Microsoft Access wildcards are ____ and ____ .",
        options: {
            A: "question mark (?); asterisk (*)",
            C: "percent sign (%); underscore (_)",
            B: "underscore(_); question mark (?)",
            D: "asterisk (*); percent sign (%)"
        },
        answer: "A",
        source: "De thi DB01 Cau 33"
    },
    {
        id: 204,
        category: "Exam DB01",
        question: "Which of the following is not a restriction for a table to be a relation?",
        options: {
            A: "The columns must be ordered.",
            C: "The cells of the table must contain a single value.",
            B: "No two rows in a table may be identical.",
            D: "All of the entries in any column must be of the same kind."
        },
        answer: "A",
        source: "De thi DB01 Cau 34"
    },
    {
        id: 205,
        category: "Exam DB01",
        question: "Which one of the following is a set of one or more attributes taken collectively to uniquely identify a record?",
        options: {
            A: "Candidate key",
            C: "Sub key",
            D: "Super key"
        },
        answer: "D",
        source: "De thi DB01 Cau 35"
    },
    {
        id: 206,
        category: "Exam DB01",
        question: "What is not an advantage of stored procedures?",
        options: {
            A: "Code sharing",
            C: "SQL can be optimized",
            D: "Increased network traffic"
        },
        answer: "D",
        source: "De thi DB01 Cau 36"
    },
    {
        id: 207,
        category: "Exam DB01",
        question: "SQL is:",
        options: {
            A: "A DBMS",
            C: "A data sublanguage",
            B: "An operating system",
            D: "A programming language"
        },
        answer: "C",
        source: "De thi DB01 Cau 37"
    },
    {
        id: 208,
        category: "Exam DB01",
        question: "A relation is considered a:",
        options: {
            A: "Column",
            C: "Two dimensional table",
            B: "Three dimensional table",
            D: "One dimensional table"
        },
        answer: "C",
        source: "De thi DB01 Cau 38"
    },
    {
        id: 209,
        category: "Exam DB01",
        question: "Which of the following types of databases are the most common?",
        options: {
            A: "Department",
            C: "Personal",
            B: "Workgroup",
            D: "Enterprise"
        },
        answer: "D",
        source: "De thi DB01 Cau 39"
    },
    {
        id: 210,
        category: "Exam DB01",
        question: "Which one of the following attribute can be taken as a primary key?",
        options: {
            A: "Department",
            B: "Name",
            C: "Street",
            D: "Id"
        },
        answer: "D",
        source: "De thi DB01 Cau 40"
    }
,
    {
        id: 211,
        category: "Exam DB12",
        question: "Helping people keep track of things is the purpose of a(n) ________ .",
        options: {
            A: "relationship",
            C: "instance",
            B: "database",
            D: "table"
        },
        answer: "B",
        source: "Exam DB12 Cau 1"
    },
    {
        id: 212,
        category: "Exam DB12",
        question: "Creating a read-only database is a task that is ________ assigned to beginning database professionals.",
        options: {
            A: "Commonly",
            C: "Seldom"
        },
        answer: "C",
        source: "Exam DB12 Cau 2"
    },
    {
        id: 213,
        category: "Exam DB12",
        question: "A UNION query is which of the following?",
        options: {
            A: "Combines the output from multiple queries and does not include the same number of columns.",
            C: "Combines the output from multiple queries and must include the same number of columns.",
            B: "Combines the output from no more than two queries and does not include the same number of columns.",
            D: "Combines the output from no more than two queries and must include the same number of columns."
        },
        answer: "C",
        source: "Exam DB12 Cau 3"
    },
    {
        id: 214,
        category: "Exam DB12",
        question: "A domain is atomic if elements of the domain are considered to be ____________ units.",
        options: {
            A: "Indivisbile",
            C: "Divisible",
            B: "Different",
            D: "Constant"
        },
        answer: "A",
        source: "Exam DB12 Cau 4"
    },
    {
        id: 215,
        category: "Exam DB12",
        question: "Which of the following are the five built-in functions provided by SQL?",
        options: {
            A: "SUM, AVG, MIN, MAX, SUB",
            C: "COUNT, SUM, AVG, MAX, MIN"
        },
        answer: "C",
        source: "Exam DB12 Cau 5"
    },
    {
        id: 216,
        category: "Exam DB12",
        question: "Which of the following is valid SQL for an Index?",
        options: {
            A: "CHANGE INDEX ID",
            C: "ADD INDEX ID",
            B: "CREATE INDEX ID",
            D: "REMOVE INDEX ID"
        },
        answer: "B",
        source: "Exam DB12 Cau 6"
    },
    {
        id: 217,
        category: "Exam DB12",
        question: "The result of a SQL SELECT statement is a(n) ________ .",
        options: {
            A: "form",
            C: "report",
            B: "file",
            D: "table"
        },
        answer: "D",
        source: "Exam DB12 Cau 7"
    },
    {
        id: 218,
        category: "Exam DB12",
        question: "Which of the following is true concerning a procedure?",
        options: {
            A: "You do not create them with SQL.",
            C: "They include procedural and SQL statements.",
            B: "They are the same thing as a function.",
            D: "They do not need to have a unique name."
        },
        answer: "C",
        source: "Exam DB12 Cau 8"
    },
    {
        id: 219,
        category: "Exam DB12",
        question: "SQL data definition commands make up a(n) ________ .",
        options: {
            A: "DDL",
            C: "HTML"
        },
        answer: "A",
        source: "Exam DB12 Cau 9"
    },
    {
        id: 220,
        category: "Exam DB12",
        question: "The SQL command to create a table is:",
        options: {
            A: "NEW TABLE",
            C: "INSERT TABLE",
            B: "CREATE TABLE",
            D: "MAKE TABLE"
        },
        answer: "B",
        source: "Exam DB12 Cau 10"
    },
    {
        id: 221,
        category: "Exam DB12",
        question: "Which of the following is NOT a basic element of all versions of the E-R model?",
        options: {
            A: "Entities",
            C: "Relationships"
        },
        answer: "B",
        source: "Exam DB12 Cau 11"
    },
    {
        id: 222,
        category: "Exam DB12",
        question: "A subquery in an SQL SELECT statement:",
        options: {
            A: "Cannot have its results sorted using ORDER BY.",
            C: "Can only be used with two tables.",
            B: "Can always be duplicated by a join.",
            D: "Has a distinct form that cannot be duplicated by a join."
        },
        answer: "A",
        source: "Exam DB12 Cau 12"
    },
    {
        id: 223,
        category: "Exam DB12",
        question: "The SQL keyword(s) ________ is used with wildcards.",
        options: {
            A: "IN and NOT IN",
            C: "LIKE",
            B: "NOT IN",
            D: "IN"
        },
        answer: "C",
        source: "Exam DB12 Cau 13"
    },
    {
        id: 224,
        category: "Exam DB12",
        question: "Which of the following types of databases are the most common?",
        options: {
            A: "Enterprise",
            C: "Workgroup",
            B: "Personal",
            D: "Department"
        },
        answer: "A",
        source: "Exam DB12 Cau 14"
    },
    {
        id: 225,
        category: "Exam DB12",
        question: "Which one of the following is a set of one or more attributes taken collectively to uniquely identify a record?",
        options: {
            A: "Candidate key",
            C: "Super key",
            B: "Sub key",
            D: "Foreign key"
        },
        answer: "C",
        source: "Exam DB12 Cau 15"
    },
    {
        id: 226,
        category: "Exam DB12",
        question: "Which one of the following is a procedural language?",
        options: {
            A: "Relational algebra",
            C: "Domain relational calculus"
        },
        answer: "A",
        source: "Exam DB12 Cau 16"
    },
    {
        id: 227,
        category: "Exam DB12",
        question: "The primary key is selected from the:",
        options: {
            A: "Composite keys",
            C: "Candidate keys",
            B: "Determinants",
            D: "Foreign keys"
        },
        answer: "C",
        source: "Exam DB12 Cau 17"
    },
    {
        id: 228,
        category: "Exam DB12",
        question: "An attribute that names or identifies entity instances is a(n):",
        options: {
            A: "Attribute",
            C: "Relationship",
            B: "Identifier",
            D: "Entity"
        },
        answer: "B",
        source: "Exam DB12 Cau 18"
    },
    {
        id: 229,
        category: "Exam DB12",
        question: "The command to eliminate a table from a database is:",
        options: {
            A: "DROP TABLE CUSTOMER;",
            C: "DELETE TABLE CUSTOMER;",
            B: "REMOVE TABLE CUSTOMER;",
            D: "UPDATE TABLE CUSTOMER;"
        },
        answer: "A",
        source: "Exam DB12 Cau 19"
    },
    {
        id: 230,
        category: "Exam DB12",
        question: "You can add a row using SQL in a database with which of the following?",
        options: {
            A: "NEW",
            B: "CREATE",
            C: "MAKE",
            D: "INSERT"
        },
        answer: "D",
        source: "Exam DB12 Cau 20"
    },
    {
        id: 231,
        category: "Exam DB12",
        question: "A functional dependency is a relationship between or among:",
        options: {
            A: "Attributes",
            C: "Rows"
        },
        answer: "A",
        source: "Exam DB12 Cau 21"
    },
    {
        id: 232,
        category: "Exam DB12",
        question: "A relational database consists of a collection of",
        options: {
            A: "Fields",
            C: "Tables",
            B: "Records",
            D: "Keys"
        },
        answer: "C",
        source: "Exam DB12 Cau 22"
    },
    {
        id: 233,
        category: "Exam DB12",
        question: "________ is an open source DBMS product that runs on UNIX, Linux and Windows.",
        options: {
            A: "Sun ACCESS",
            C: "JDBC/SQL"
        },
        answer: "D",
        source: "Exam DB12 Cau 23"
    },
    {
        id: 234,
        category: "Exam DB12",
        question: "A key:",
        options: {
            A: "Identifies a row.",
            C: "Identifies a column",
            B: "Must always be composed of two or more columns.",
            D: "Can only be one column."
        },
        answer: "A",
        source: "Exam DB12 Cau 24"
    },
    {
        id: 235,
        category: "Exam DB12",
        question: "Which of the following is a group of one or more attributes that uniquely identifies a row?",
        options: {
            A: "Key",
            C: "Determinant",
            B: "Tuple",
            D: "Relation"
        },
        answer: "A",
        source: "Exam DB12 Cau 25"
    },
    {
        id: 236,
        category: "Exam DB12",
        question: "To remove duplicate rows from the results of an SQL SELECT statement, the ________ qualifier specified must be included.",
        options: {
            A: "DISTINCT",
            C: "SINGLE",
            B: "UNIQUE",
            D: "ONLY"
        },
        answer: "A",
        source: "Exam DB12 Cau 26"
    },
    {
        id: 237,
        category: "Exam DB12",
        question: "If attributes A and B determine attribute C, then it is also true that:",
        options: {
            A: "(A,B) is a composite determinant.",
            C: "",
            B: "C is a determinant.",
            D: "B →"
        },
        answer: "A",
        source: "Exam DB12 Cau 27"
    },
    {
        id: 238,
        category: "Exam DB12",
        question: "The HAVING clause does which of the following?",
        options: {
            A: "Acts like a WHERE clause but is used for rows rather than columns.",
            C: "Acts like a WHERE clause but is used for groups rather than rows."
        },
        answer: "C",
        source: "Exam DB12 Cau 28"
    },
    {
        id: 239,
        category: "Exam DB12",
        question: "What is not an advantage of stored procedures?",
        options: {
            A: "SQL can be optimized",
            C: "Increased network traffic",
            B: "Greater security",
            D: "Code sharing"
        },
        answer: "C",
        source: "Exam DB12 Cau 29"
    },
    {
        id: 240,
        category: "Exam DB12",
        question: "A CASE SQL statement is which of the following?",
        options: {
            A: "A way to establish an IF-THEN-ELSE in SQL.",
            C: "A way to establish a data definition in SQL."
        },
        answer: "A",
        source: "Exam DB12 Cau 30"
    },
    {
        id: 241,
        category: "Exam DB12",
        question: "An attribute is a(n):",
        options: {
            A: "Column of a table.",
            C: "Row of a table",
            B: "Two dimensional table",
            D: "Column of a table"
        },
        answer: "A",
        source: "Exam DB12 Cau 31"
    },
    {
        id: 242,
        category: "Exam DB12",
        question: "The term attribute refers to a ___________ of a table.",
        options: {
            A: "Tuple",
            C: "Key",
            B: "Column",
            D: "Record"
        },
        answer: "B",
        source: "Exam DB12 Cau 32"
    },
    {
        id: 243,
        category: "Exam DB12",
        question: "The Microsoft Access wildcards are ____ and ____ .",
        options: {
            A: "question mark (?); asterisk (*)",
            C: "underscore(_); question mark (?)"
        },
        answer: "A",
        source: "Exam DB12 Cau 33"
    },
    {
        id: 244,
        category: "Exam DB12",
        question: "The term _______ is used to refer to a row.",
        options: {
            A: "Field",
            C: "Instance"
        },
        answer: "D",
        source: "Exam DB12 Cau 34"
    },
    {
        id: 245,
        category: "Exam DB12",
        question: "SQL is:",
        options: {
            A: "A data sublanguage",
            C: "A programming language",
            B: "A DBMS",
            D: "An operating system"
        },
        answer: "A",
        source: "Exam DB12 Cau 35"
    },
    {
        id: 246,
        category: "Exam DB12",
        question: "Which of the following is true concerning triggers?",
        options: {
            A: "You do not create them with SQL.",
            C: "They execute against only some applications that access a database.",
            B: "They have an event, condition, and action.",
            D: "They cannot cascade (cause another trigger to fire)."
        },
        answer: "B",
        source: "Exam DB12 Cau 36"
    },
    {
        id: 247,
        category: "Exam DB12",
        question: "What is an SQL virtual table that is constructed from other tables?",
        options: {
            A: "Query results",
            C: "A view"
        },
        answer: "C",
        source: "Exam DB12 Cau 37"
    },
    {
        id: 248,
        category: "Exam DB12",
        question: "Which one of the following sorts rows in SQL?",
        options: {
            A: "ORDER BY",
            C: "GROUP BY"
        },
        answer: "A",
        source: "Exam DB12 Cau 38"
    },
    {
        id: 249,
        category: "Exam DB12",
        question: "The SQL keyword BETWEEN is used:",
        options: {
            A: "To limit the column displayed",
            C: "For ranges",
            B: "Sort the results",
            D: "As a wildcard"
        },
        answer: "C",
        source: "Exam DB12 Cau 39"
    },
    {
        id: 250,
        category: "Exam DB12",
        question: "Row is synonymous with the term:",
        options: {
            A: "Field",
            C: "Record",
            B: "Column",
            D: "Relation"
        },
        answer: "C",
        source: "Exam DB12 Cau 40"
    }
,
    {
        id: 251,
        category: "Exam DB13",
        question: "Which of the following is valid SQL for an Index?",
        options: {
            A: "CHANGE INDEX ID",
            C: "CREATE INDEX ID",
            B: "ADD INDEX ID",
            D: "REMOVE INDEX ID"
        },
        answer: "C",
        source: "Exam DB13 Cau 1"
    },
    {
        id: 252,
        category: "Exam DB13",
        question: "The result of a SQL SELECT statement is a(n) ________ .",
        options: {
            A: "table",
            C: "file"
        },
        answer: "A",
        source: "Exam DB13 Cau 2"
    },
    {
        id: 253,
        category: "Exam DB13",
        question: "When using the SQL INSERT statement:",
        options: {
            A: "Rows can be modified according to criteria only.",
            C: "Rows can either be inserted into a table one at a time or in groups.",
            B: "Rows can be inserted into a table only one at a time only.",
            D: "Rows cannot be copied in mass from one table to another only."
        },
        answer: "C",
        source: "Exam DB13 Cau 3"
    },
    {
        id: 254,
        category: "Exam DB13",
        question: "When three or more AND and OR conditions are combined, it is easier to use the SQL keyword(s):",
        options: {
            A: "NOT IN",
            C: "IN and NOT IN"
        },
        answer: "C",
        source: "Exam DB13 Cau 4"
    },
    {
        id: 255,
        category: "Exam DB13",
        question: "Which of the following is a correlated subquery?",
        options: {
            A: "Uses the result of an inner query to determine the processing of an inner query.",
            C: "Uses the result of an outer query to determine the processing of an outer query.",
            B: "Uses the result of an inner query to determine the processing of an outer query.",
            D: "Uses the result of an outer query to determine the processing of an inner query."
        },
        answer: "D",
        source: "Exam DB13 Cau 5"
    },
    {
        id: 256,
        category: "Exam DB13",
        question: "Which is NOT one of the most common types of SQL CHECK constraints?",
        options: {
            A: "Comparing one column value to another within the same table",
            C: "Range checks",
            B: "Lists of value",
            D: "System date"
        },
        answer: "D",
        source: "Exam DB13 Cau 6"
    },
    {
        id: 257,
        category: "Exam DB13",
        question: "An application where only one user accesses the database at a given time is an example of a(n) ________ .",
        options: {
            A: "Single-user database application",
            C: "E-commerce database application"
        },
        answer: "A",
        source: "Exam DB13 Cau 7"
    },
    {
        id: 258,
        category: "Exam DB13",
        question: "The HAVING clause does which of the following?",
        options: {
            A: "Acts like a WHERE clause but is used for groups rather than rows.",
            C: "Acts EXACTLY like a WHERE clause.",
            B: "Acts like a WHERE clause but is used for rows rather than columns.",
            D: "Acts like a WHERE clause but is used for columns rather than groups."
        },
        answer: "A",
        source: "Exam DB13 Cau 8"
    },
    {
        id: 259,
        category: "Exam DB13",
        question: "A functional dependency is a relationship between or among:",
        options: {
            A: "Relations",
            C: "Tables",
            B: "Attributes",
            D: "Rows"
        },
        answer: "B",
        source: "Exam DB13 Cau 9"
    },
    {
        id: 260,
        category: "Exam DB13",
        question: "Which of the following is not a restriction for a table to be a relation?",
        options: {
            A: "The columns must be ordered.",
            C: "No two rows in a table may be identical.",
            B: "All of the entries in any column must be of the same kind.",
            D: "The cells of the table must contain a single value."
        },
        answer: "A",
        source: "Exam DB13 Cau 10"
    },
    {
        id: 261,
        category: "Exam DB13",
        question: "The command to remove rows from a table CUSTOMER is:",
        options: {
            A: "UPDATE FROM CUSTOMER ...",
            C: "REMOVE FROM CUSTOMER ..."
        },
        answer: "D",
        source: "Exam DB13 Cau 11"
    },
    {
        id: 262,
        category: "Exam DB13",
        question: "Data administrators are responsible for:",
        options: {
            A: "Managing technical issues in the database environment.",
            C: "Physical database design.",
            B: "Writing application programs.",
            D: "Overall management of data resources in an organization."
        },
        answer: "D",
        source: "Exam DB13 Cau 12"
    },
    {
        id: 263,
        category: "Exam DB13",
        question: "One solution to the multivalued dependency constraint problem is to:",
        options: {
            A: "Split the relation into two relations, each with a single theme.",
            C: "Change the theme.",
            B: "Add a composite key.",
            D: "Create a new theme."
        },
        answer: "A",
        source: "Exam DB13 Cau 13"
    },
    {
        id: 264,
        category: "Exam DB13",
        question: "Creating a read-only database is a task that is ________ assigned to beginning database professionals.",
        options: {
            A: "Never",
            C: "Commonly",
            B: "Always",
            D: "Seldom"
        },
        answer: "D",
        source: "Exam DB13 Cau 14"
    },
    {
        id: 265,
        category: "Exam DB13",
        question: "To remove a relation from an SQL database, we use the ______ command.",
        options: {
            A: "DELETE TABLE",
            C: "DROP TABLE",
            B: "PURGE TABLE",
            D: "REMOVE TABLE"
        },
        answer: "C",
        source: "Exam DB13 Cau 15"
    },
    {
        id: 266,
        category: "Exam DB13",
        question: "Some advantages of the database approach include all, but:",
        options: {
            A: "Minimal data redundancy.",
            C: "Improved data consistency.",
            B: "Program-data dependency.",
            D: "Improved data sharing."
        },
        answer: "B",
        source: "Exam DB13 Cau 16"
    },
    {
        id: 267,
        category: "Exam DB13",
        question: "A domain is atomic if elements of the domain are considered to be ____________ units.",
        options: {
            A: "Divisible",
            C: "Indivisbile",
            B: "Different",
            D: "Constant"
        },
        answer: "C",
        source: "Exam DB13 Cau 17"
    },
    {
        id: 268,
        category: "Exam DB13",
        question: "An attribute in a relation is a foreign key if the _______ key from one relation is used as an attribute in that relation.",
        options: {
            A: "Sub",
            C: "Candidate",
            B: "Super",
            D: "Primary"
        },
        answer: "D",
        source: "Exam DB13 Cau 18"
    },
    {
        id: 269,
        category: "Exam DB13",
        question: "To define what columns should be displayed in an SQL SELECT statement:",
        options: {
            A: "use USING to name the source table(s) and list the columns to be shown after WHERE.",
            C: "use FROM to name the source table(s) and list the columns to be shown after SELECT.",
            B: "use USING to name the source table(s) and list the columns to be shown after SELECT.",
            D: "use SELECT to name the source table(s) and list the columns to be shown after USING."
        },
        answer: "C",
        source: "Exam DB13 Cau 19"
    },
    {
        id: 270,
        category: "Exam DB13",
        question: "The following are components of a database except ________ .",
        options: {
            A: "reports",
            C: "user data"
        },
        answer: "A",
        source: "Exam DB13 Cau 20"
    },
    {
        id: 271,
        category: "Exam DB13",
        question: "What is not an advantage of stored procedures?",
        options: {
            A: "Increased network traffic",
            C: "Greater security",
            B: "SQL can be optimized",
            D: "Code sharing"
        },
        answer: "A",
        source: "Exam DB13 Cau 21"
    },
    {
        id: 272,
        category: "Exam DB13",
        question: "You can add a row using SQL in a database with which of the following?",
        options: {
            A: "CREATE",
            B: "NEW",
            C: "INSERT",
            D: "MAKE"
        },
        answer: "C",
        source: "Exam DB13 Cau 22"
    },
    {
        id: 273,
        category: "Exam DB13",
        question: "If attributes A and B determine attribute C, then it is also true that:",
        options: {
            A: "B →",
            C: "",
            B: "C is a determinant.",
            D: "(A,B) is a composite determinant."
        },
        answer: "D",
        source: "Exam DB13 Cau 23"
    },
    {
        id: 274,
        category: "Exam DB13",
        question: "A recursive relationship is a relationship between an entity and ________ .",
        options: {
            A: "A subtype entity",
            C: "An instance entity"
        },
        answer: "D",
        source: "Exam DB13 Cau 24"
    },
    {
        id: 275,
        category: "Exam DB13",
        question: "The DROP TABLE statement:",
        options: {
            A: "Deletes the table structure along with the table data.",
            C: "Is not an SQL statement."
        },
        answer: "A",
        source: "Exam DB13 Cau 25"
    },
    {
        id: 276,
        category: "Exam DB13",
        question: "A subquery in an SQL SELECT statement:",
        options: {
            A: "Can always be duplicated by a join.",
            C: "Cannot have its results sorted using ORDER BY.",
            B: "Has a distinct form that cannot be duplicated by a join.",
            D: "Can only be used with two tables."
        },
        answer: "C",
        source: "Exam DB13 Cau 26"
    },
    {
        id: 277,
        category: "Exam DB13",
        question: "SQL data definition commands make up a(n) ________ .",
        options: {
            A: "DDL",
            C: "DML"
        },
        answer: "A",
        source: "Exam DB13 Cau 27"
    },
    {
        id: 278,
        category: "Exam DB13",
        question: "A key:",
        options: {
            A: "Can only be one column.",
            C: "Identifies a column"
        },
        answer: "D",
        source: "Exam DB13 Cau 28"
    },
    {
        id: 279,
        category: "Exam DB13",
        question: "The wildcard in a WHERE clause is useful when?",
        options: {
            A: "An exact match is necessary in a CREATE statement.",
            C: "An exact match is necessary in a SELECT statement."
        },
        answer: "B",
        source: "Exam DB13 Cau 29"
    },
    {
        id: 280,
        category: "Exam DB13",
        question: "How many JDBC driver types does Sun define?",
        options: {
            A: "Four",
            C: "One"
        },
        answer: "A",
        source: "Exam DB13 Cau 30"
    },
    {
        id: 281,
        category: "Exam DB13",
        question: "Row is synonymous with the term:",
        options: {
            A: "Record",
            C: "Column"
        },
        answer: "A",
        source: "Exam DB13 Cau 31"
    },
    {
        id: 282,
        category: "Exam DB13",
        question: "The primary key is selected from the:",
        options: {
            A: "Determinants",
            C: "Composite keys"
        },
        answer: "D",
        source: "Exam DB13 Cau 32"
    },
    {
        id: 283,
        category: "Exam DB13",
        question: "SQL is:",
        options: {
            A: "An operating system",
            C: "A programming language",
            B: "A DBMS",
            D: "A data sublanguage"
        },
        answer: "D",
        source: "Exam DB13 Cau 33"
    },
    {
        id: 284,
        category: "Exam DB13",
        question: "Metadata enables database designers and users to do all of the following except:",
        options: {
            A: "Understand what data exist",
            C: "What the data mean",
            B: "Sample data",
            D: "What the fine distinctions are between similar data items."
        },
        answer: "B",
        source: "Exam DB13 Cau 34"
    },
    {
        id: 285,
        category: "Exam DB13",
        question: "Entities can be associated with one another in which of the following?",
        options: {
            A: "Attributes",
            C: "Entities"
        },
        answer: "B",
        source: "Exam DB13 Cau 35"
    },
    {
        id: 286,
        category: "Exam DB13",
        question: "A relational database consists of a collection of",
        options: {
            A: "Tables",
            C: "Fields",
            B: "Records",
            D: "Keys"
        },
        answer: "A",
        source: "Exam DB13 Cau 36"
    },
    {
        id: 287,
        category: "Exam DB13",
        question: "What MySQL property is used to create a surrogate key in MySQL?",
        options: {
            A: "AUTO_INCREMENT",
            C: "SEQUENCE",
            B: "UNIQUE",
            D: "INDEX"
        },
        answer: "A",
        source: "Exam DB13 Cau 37"
    },
    {
        id: 288,
        category: "Exam DB13",
        question: "Because it contains a description of its own structure, a database is considered to be ________ .",
        options: {
            A: "described",
            C: "an application program",
            B: "self-describing",
            D: "metadata compatible"
        },
        answer: "B",
        source: "Exam DB13 Cau 38"
    },
    {
        id: 289,
        category: "Exam DB13",
        question: "SQL query and modification commands make up a(n) ________ .",
        options: {
            A: "DDL",
            B: "XML",
            C: "DML",
            D: "HTML"
        },
        answer: "C",
        source: "Exam DB13 Cau 39"
    },
    {
        id: 290,
        category: "Exam DB13",
        question: "Which of the following is NOT a type of SQL constraint?",
        options: {
            A: "FOREIGN KEY",
            C: "UNIQUE",
            B: "PRIMARY KEY",
            D: "ALTERNATE KEY"
        },
        answer: "D",
        source: "Exam DB13 Cau 40"
    }
    ,
    {
        id: 1,
        category: "Chapter 1: Introduction",
        question: "According to the slides, which of the following best describes a \"Database\"?",
        options: {
            A: "A special software application that interacts with users.",
            B: "A collection of information organized so that it can be easily accessed, managed, and updated.",
            C: "A set of integrity constraints buried in program code.",
            D: "A program that lets users create and administer data."
        },
        answer: "B",
        source: "Slide 5"
    },
    {
        id: 2,
        category: "Chapter 1: Introduction",
        question: "What does DBMS stand for?",
        options: {
            A: "Data Backup Management Service",
            B: "Database Business Modeling System",
            C: "Database Management System",
            D: "Data Basic Maintenance Software"
        },
        answer: "C",
        source: "Slide 6"
    },
    {
        id: 3,
        category: "Chapter 1: Introduction",
        question: "Which of the following is NOT listed as a purpose or advantage of Database Systems compared to file processing systems?",
        options: {
            A: "To increase data redundancy and inconsistency.",
            B: "To prevent data from loss.",
            C: "To provide simultaneous access to data for many users.",
            D: "To delimit access to data for different users (Security)."
        },
        answer: "A",
        source: "Slide 7, 11"
    },
    {
        id: 4,
        category: "Chapter 1: Introduction",
        question: "In the context of database disadvantages, what does \"Data redundancy\" mean?",
        options: {
            A: "Data is lost during a power outage.",
            B: "Data is stored in multiple file formats resulting in duplication of information.",
            C: "It is difficult to add new constraints to the data.",
            D: "Multiple users are reading the same data at the same time."
        },
        answer: "B",
        source: "Slide 11"
    },
    {
        id: 5,
        category: "Chapter 1: Introduction",
        question: "\"Transfer of funds from one account to another should either complete or not happen at all.\" This example illustrates which concept?",
        options: {
            A: "Data isolation",
            B: "Security problems",
            C: "Atomicity of updates",
            D: "Data redundancy"
        },
        answer: "C",
        source: "Slide 12"
    },
    {
        id: 6,
        category: "Chapter 1: Introduction",
        question: "Which level of data abstraction describes HOW the data are actually stored?",
        options: {
            A: "View level",
            B: "Logical level",
            C: "Physical level",
            D: "User level"
        },
        answer: "C",
        source: "Slide 18"
    },
    {
        id: 7,
        category: "Chapter 1: Introduction",
        question: "Which level of data abstraction describes WHAT data are stored in the database and the relationships among them?",
        options: {
            A: "View level",
            B: "Logical level",
            C: "Physical level",
            D: "Hardware level"
        },
        answer: "B",
        source: "Slide 18"
    },
    {
        id: 8,
        category: "Chapter 1: Introduction",
        question: "In the Relational Model, what is used to represent both data and the relationships among those data?",
        options: {
            A: "A collection of tables",
            B: "A hierarchical tree",
            C: "A set of objects",
            D: "A network graph"
        },
        answer: "A",
        source: "Slide 16"
    },
    {
        id: 9,
        category: "Chapter 1: Introduction",
        question: "Which of the following data models is mainly used for database design?",
        options: {
            A: "Relational model",
            B: "Entity-Relationship (ER) data model",
            C: "Network model",
            D: "Hierarchical model"
        },
        answer: "B",
        source: "Slide 15"
    },
    {
        id: 10,
        category: "Chapter 1: Introduction",
        question: "What is an RDBMS?",
        options: {
            A: "A program that lets users create, update, and administer a relational database.",
            B: "A collection of conceptual tools for describing data semantics.",
            C: "A system solely for backing up files.",
            D: "A type of hardware used to store large collections of data."
        },
        answer: "A",
        source: "Slide 19"
    },
    // Chapter 2: Database Design & ER Model
    {
        id: 11,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which phase of the database design process involves constructing an Entity Relationship Model (ERM) that is independent of any particular DBMS?",
        options: {
            A: "Physical Design",
            B: "Logical Design",
            C: "Conceptual Design",
            D: "Requirements Analysis"
        },
        answer: "C",
        source: "Slide 6, 37"
    },
    {
        id: 12,
        category: "Chapter 2: Database Design & ER Model",
        question: "In the context of database design, what does \"Logical Design\" primarily involve?",
        options: {
            A: "Creating the internal schema and file organization.",
            B: "Mapping the conceptual model to a specific data model (e.g., Relational) of the chosen DBMS.",
            C: "Collecting user requirements.",
            D: "Writing SQL queries."
        },
        answer: "B",
        source: "Slide 8, 352"
    },
    {
        id: 13,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is an \"Entity\" in the ER model?",
        options: {
            A: "A specific database table row.",
            B: "A person, place, object, event, or concept in the user environment about which the organization wishes to maintain data.",
            C: "A relationship between two tables.",
            D: "A characteristic or property of a user."
        },
        answer: "B",
        source: "Slide 12, 385"
    },
    {
        id: 14,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which of the following best describes a \"Weak Entity\"?",
        options: {
            A: "An entity that has too many attributes.",
            B: "An entity that can exist independently of other entities.",
            C: "An entity whose existence depends on another entity (identifying owner) and does not have a full identifier of its own.",
            D: "An entity that participates in a many-to-many relationship."
        },
        answer: "C",
        source: "Slide 16, 431"
    },
    {
        id: 15,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which type of attribute can be divided into smaller subparts (e.g., Address divided into Street, City, State)?",
        options: {
            A: "Simple Attribute",
            B: "Composite Attribute",
            C: "Derived Attribute",
            D: "Multivalued Attribute"
        },
        answer: "B",
        source: "Slide 26, 550"
    },
    {
        id: 16,
        category: "Chapter 2: Database Design & ER Model",
        question: "An attribute that can be calculated from other attributes (e.g., calculating \"Age\" from \"Date of Birth\") is called a:",
        options: {
            A: "Stored Attribute",
            B: "Key Attribute",
            C: "Derived Attribute",
            D: "Multivalued Attribute"
        },
        answer: "C",
        source: "Slide 31, 610"
    },
    {
        id: 17,
        category: "Chapter 2: Database Design & ER Model",
        question: "How is a \"Multivalued Attribute\" typically represented in the notation described in the slides (or conceptualized)?",
        options: {
            A: "By a dashed line.",
            B: "By a double oval or curly braces { }.",
            C: "By a rectangle.",
            D: "By a diamond shape."
        },
        answer: "B",
        source: "Slide 32"
    },
    {
        id: 18,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is a \"Recursive Relationship\" (or Unary Relationship)?",
        options: {
            A: "A relationship between two different entity types.",
            B: "A relationship where an entity is related to itself (the same entity type).",
            C: "A relationship involving three different entity types.",
            D: "A relationship that no longer exists."
        },
        answer: "B",
        source: "Slide 40, 753"
    },
    {
        id: 19,
        category: "Chapter 2: Database Design & ER Model",
        question: "In a binary relationship, if an entity in set A is associated with any number of entities in set B, and an entity in set B is associated with at most one entity in set A, the cardinality is:",
        options: {
            A: "One-to-One (1:1)",
            B: "One-to-Many (1:N)",
            C: "Many-to-Many (M:N)",
            D: "Zero-to-Zero"
        },
        answer: "B",
        source: "Slide 44, 813"
    },
    {
        id: 20,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is an \"Associative Entity\" (or Gerund)?",
        options: {
            A: "An entity that replaces a many-to-many relationship and contains attributes specific to that relationship.",
            B: "A weak entity that has no owner.",
            C: "A supertype entity.",
            D: "An attribute that acts like an entity."
        },
        answer: "A",
        source: "Slide 38, 727"
    },
    {
        id: 21,
        category: "Chapter 2: Database Design & ER Model",
        question: "What does \"Mandatory Participation\" (Total Participation) mean?",
        options: {
            A: "The minimum cardinality is zero.",
            B: "Only some entity occurrences participate in the relationship.",
            C: "All entity occurrences must participate in the relationship (Minimum cardinality is one).",
            D: "The maximum cardinality is many."
        },
        answer: "C",
        source: "Slide 49, 875"
    },
    {
        id: 22,
        category: "Chapter 2: Database Design & ER Model",
        question: "In the Enhanced Entity Relationship (EER) model, what is \"Generalization\"?",
        options: {
            A: "A Top-Down process of defining subtypes from a supertype.",
            B: "A Bottom-Up process of defining a more general entity type from a set of specialized entity types.",
            C: "The process of deleting entities.",
            D: "The process of normalizing tables."
        },
        answer: "B",
        source: "Slide 68, 1137"
    },
    {
        id: 23,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is the property that enables an entity subtype to inherit attributes and relationships from its supertype?",
        options: {
            A: "Specialization",
            B: "Aggregation",
            C: "Inheritance",
            D: "Segmentation"
        },
        answer: "C",
        source: "Slide 66, 1112"
    },
    {
        id: 24,
        category: "Chapter 2: Database Design & ER Model",
        question: "If a supertype instance must be a member of at least one subtype, this is known as:",
        options: {
            A: "Partial Completeness Rule",
            B: "Total Completeness Rule",
            C: "Disjoint Rule",
            D: "Overlap Rule"
        },
        answer: "B",
        source: "Slide 73, 1220"
    },
    {
        id: 25,
        category: "Chapter 2: Database Design & ER Model",
        question: "If a supertype instance can belong to more than one subtype simultaneously, which constraint applies?",
        options: {
            A: "Disjoint Rule",
            B: "Overlap Rule",
            C: "Partial Rule",
            D: "Mandatory Rule"
        },
        answer: "B",
        source: "Slide 77, 1274"
    },
    {
        id: 26,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which symbol is used to represent the \"Disjoint\" constraint in an EER diagram?",
        options: {
            A: "The letter \"o\" inside the circle.",
            B: "The letter \"d\" inside the circle.",
            C: "A double line.",
            D: "A single line."
        },
        answer: "B",
        source: "Slide 77, 1274"
    },
    {
        id: 27,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which attribute type is indicated by a double underline in the text's notation (typically associated with weak entities)?",
        options: {
            A: "Primary Identifier",
            B: "Partial Identifier",
            C: "Composite Attribute",
            D: "Derived Attribute"
        },
        answer: "B",
        source: "Slide 17, 440"
    },
    {
        id: 28,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is the \"Degree\" of a relationship?",
        options: {
            A: "The number of attributes in the relationship.",
            B: "The number of entity types that participate in the relationship.",
            C: "The number of rows in the table.",
            D: "The cardinality ratio."
        },
        answer: "B",
        source: "Slide 40, 751"
    },
    {
        id: 29,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which of the following is an example of a Ternary relationship?",
        options: {
            A: "Employee supervises Employee.",
            B: "Student takes Class.",
            C: "Employee works on Project using a Skill (Three entities associated).",
            D: "Customer places Order."
        },
        answer: "C",
        source: "Slide 40, 755"
    },
    {
        id: 30,
        category: "Chapter 2: Database Design & ER Model",
        question: "In the Crow's Foot notation, what does a circle on the relationship line usually indicate?",
        options: {
            A: "Mandatory participation (Minimum 1).",
            B: "Optional participation (Minimum 0).",
            C: "A primary key.",
            D: "A derived attribute."
        },
        answer: "B",
        source: "Slide 46, 833"
    },
    // Chapter 2: Relational Algebra
    {
        id: 31,
        category: "Chapter 2: Relational Algebra",
        question: "What is Relational Algebra?",
        options: {
            A: "A procedural query language used to define valid SQL syntax.",
            B: "A set of operations that take one or two relations as input and produce a new relation as their result.",
            C: "A graphical representation of database tables.",
            D: "A method for normalizing database tables."
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 32,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is classified as a Unary Operation in Relational Algebra?",
        options: {
            A: "Union (∪)",
            B: "Cartesian Product (×)",
            C: "Select (σ)",
            D: "Join (⋈)"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 33,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is classified as a Binary Operation?",
        options: {
            A: "Rename (ρ)",
            B: "Project (Π)",
            C: "Select (σ)",
            D: "Union (∪)"
        },
        answer: "D",
        source: "Slide 3"
    },
    {
        id: 34,
        category: "Chapter 2: Relational Algebra",
        question: "The Select operation is denoted by which Greek letter?",
        options: {
            A: "Sigma (σ)",
            B: "Pi (Π)",
            C: "Rho (ρ)",
            D: "Lambda (λ)"
        },
        answer: "A",
        source: "Slide 3, 5"
    },
    {
        id: 35,
        category: "Chapter 2: Relational Algebra",
        question: "What is the primary function of the Select (σ) operation?",
        options: {
            A: "To select certain columns from a table and discard others.",
            B: "To select tuples (rows) that satisfy a given predicate.",
            C: "To combine two relations into one.",
            D: "To rename attributes in a relation."
        },
        answer: "B",
        source: "Slide 5"
    },
    {
        id: 36,
        category: "Chapter 2: Relational Algebra",
        question: "The Project operation is denoted by which Greek letter?",
        options: {
            A: "Sigma (σ)",
            B: "Pi (Π)",
            C: "Omega (Ω)",
            D: "Theta (θ)"
        },
        answer: "B",
        source: "Slide 3, 9"
    },
    {
        id: 37,
        category: "Chapter 2: Relational Algebra",
        question: "What is the primary function of the Project (Π) operation?",
        options: {
            A: "To select certain columns from the table and discard the other columns.",
            B: "To filter rows based on a condition.",
            C: "To join two tables based on a common key.",
            D: "To perform mathematical calculations on data."
        },
        answer: "A",
        source: "Slide 9"
    },
    {
        id: 38,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following statements about the Project operation is TRUE?",
        options: {
            A: "It returns all rows including duplicates.",
            B: "Duplicate rows are removed from the result, since relations are sets.",
            C: "It operates on two relations simultaneously.",
            D: "It is denoted by the symbol σ."
        },
        answer: "B",
        source: "Slide 9"
    },
    {
        id: 39,
        category: "Chapter 2: Relational Algebra",
        question: "In the Select operation, which logical connectives can be used to combine predicates?",
        options: {
            A: "IF, THEN, ELSE",
            B: "AND (∧), OR (∨), NOT (¬)",
            C: "UNION, INTERSECT, MINUS",
            D: "XOR, NAND, NOR"
        },
        answer: "B",
        source: "Slide 7"
    },
    {
        id: 40,
        category: "Chapter 2: Relational Algebra",
        question: "Which comparison operators are allowed in the Selection predicate?",
        options: {
            A: "only = and ≠",
            B: "=, ≠, <, ≤, >, ≥",
            C: "only < and >",
            D: "==, !=, <>, ><"
        },
        answer: "B",
        source: "Slide 7"
    },
    {
        id: 41,
        category: "Chapter 2: Relational Algebra",
        question: "How would you represent a query to find instructors in the \"Physics\" department with a salary greater than $90,000?",
        options: {
            A: "σ_dept_name=\"Physics\" ∨ salary > 90000 (instructor)",
            B: "Π_dept_name=\"Physics\" ∧ salary > 90000 (instructor)",
            C: "σ_dept_name=\"Physics\" ∧ salary > 90000 (instructor)",
            D: "instructor × σ_salary > 90000"
        },
        answer: "C",
        source: "Slide 8"
    },
    {
        id: 42,
        category: "Chapter 2: Relational Algebra",
        question: "The Rename operation is denoted by which symbol?",
        options: {
            A: "σ",
            B: "Π",
            C: "ρ (rho)",
            D: "δ"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 43,
        category: "Chapter 2: Relational Algebra",
        question: "Which operation is used to combine two relations by including all tuples from both relations (removing duplicates)?",
        options: {
            A: "Intersection (∩)",
            B: "Set Difference (−)",
            C: "Union (∪)",
            D: "Selection (σ)"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 44,
        category: "Chapter 2: Relational Algebra",
        question: "Which symbol represents the Cartesian Product operation?",
        options: {
            A: "×",
            B: "÷",
            C: "+",
            D: "*"
        },
        answer: "A",
        source: "Slide 3"
    },
    {
        id: 45,
        category: "Chapter 2: Relational Algebra",
        question: "If relation R has 5 rows and relation S has 3 rows, how many rows will the Cartesian Product R × S have?",
        options: {
            A: "8",
            B: "15",
            C: "2",
            D: "5"
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 46,
        category: "Chapter 2: Relational Algebra",
        question: "Which operation returns tuples that are present in one relation but NOT in another?",
        options: {
            A: "Union (∪)",
            B: "Intersection (∩)",
            C: "Set Difference (−)",
            D: "Cartesian Product (×)"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 47,
        category: "Chapter 2: Relational Algebra",
        question: "The Intersection (∩) operation returns:",
        options: {
            A: "All tuples from both relations.",
            B: "Tuples that are common to both relations.",
            C: "Tuples unique to the first relation.",
            D: "Tuples unique to the second relation."
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 48,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is NOT a fundamental unary operation?",
        options: {
            A: "Rename",
            B: "Project",
            C: "Union",
            D: "Select"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 49,
        category: "Chapter 2: Relational Algebra",
        question: "When performing a Project operation like Π_ID, name, salary (instructor), what happens to the dept_name column?",
        options: {
            A: "It is included in the result but empty.",
            B: "It is used for sorting.",
            C: "It is erased/discarded from the result.",
            D: "It is renamed to ID."
        },
        answer: "C",
        source: "Slide 10"
    },
    {
        id: 50,
        category: "Chapter 2: Relational Algebra",
        question: "Relational algebra operations can be composed. This means:",
        options: {
            A: "The result of one operation can be used as input for another operation.",
            B: "You can only perform one operation at a time.",
            C: "Operations must be performed in alphabetical order.",
            D: "Only binary operations can be combined."
        },
        answer: "A",
        source: "Slide 11"
    },
    // Chapter 2: Relational Algebra - Practice Questions
    {
        id: 51,
        category: "Chapter 2: Relational Algebra",
        question: "Relational algebra is a __________ query language.",
        options: {
            A: "Object-oriented",
            B: "Procedural",
            C: "Non-procedural",
            D: "Declarative"
        },
        answer: "B",
        source: "Slide 1"
    },
    {
        id: 52,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is NOT one of the six basic operators of relational algebra?",
        options: {
            A: "Select (σ)",
            B: "Project (Π)",
            C: "Join (⋈)",
            D: "Union (∪)"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 53,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following operations is classified as a \"Unary Operation\"?",
        options: {
            A: "Union (∪)",
            B: "Cartesian product (×)",
            C: "Set difference (−)",
            D: "Select (σ)"
        },
        answer: "D",
        source: "Slide 3"
    },
    {
        id: 54,
        category: "Chapter 2: Relational Algebra",
        question: "The Select operation is denoted by which Greek letter?",
        options: {
            A: "Rho (ρ)",
            B: "Sigma (σ)",
            C: "Pi (Π)",
            D: "Lambda (λ)"
        },
        answer: "B",
        source: "Slide 4"
    },
    {
        id: 55,
        category: "Chapter 2: Relational Algebra",
        question: "What is the primary function of the Select operation?",
        options: {
            A: "To combine two relations.",
            B: "To select tuples (rows) that satisfy a given predicate.",
            C: "To rename attributes in a relation.",
            D: "To select specific columns and discard others."
        },
        answer: "B",
        source: "Slide 5"
    },
    {
        id: 56,
        category: "Chapter 2: Relational Algebra",
        question: "In the expression σ_p(r), what does p represent?",
        options: {
            A: "The name of the relation.",
            B: "The projection list.",
            C: "The selection predicate.",
            D: "The primary key."
        },
        answer: "C",
        source: "Slide 6"
    },
    {
        id: 57,
        category: "Chapter 2: Relational Algebra",
        question: "Which logical connectives can be used to combine predicates in the Select operation?",
        options: {
            A: "∧ (and), ∨ (or), ¬ (not)",
            B: "∩ (intersection), ∪ (union)",
            C: "+ (plus), − (minus)",
            D: "∈ (in), ∉ (not in)"
        },
        answer: "A",
        source: "Slide 7"
    },
    {
        id: 58,
        category: "Chapter 2: Relational Algebra",
        question: "Which operation is denoted by the Greek letter Pi (Π)?",
        options: {
            A: "Selection",
            B: "Projection",
            C: "Cartesian Product",
            D: "Rename"
        },
        answer: "B",
        source: "Slide 8"
    },
    {
        id: 59,
        category: "Chapter 2: Relational Algebra",
        question: "The Project operation allows you to:",
        options: {
            A: "Select rows based on a condition.",
            B: "Combine data from two tables.",
            C: "Select certain columns (attributes) and discard the others.",
            D: "Rename the relation."
        },
        answer: "C",
        source: "Slide 9"
    },
    {
        id: 60,
        category: "Chapter 2: Relational Algebra",
        question: "How does the Project operation handle duplicate rows in the result?",
        options: {
            A: "It keeps all duplicates.",
            B: "It removes duplicate rows since relations are sets.",
            C: "It returns an error if duplicates exist.",
            D: "It asks the user what to do."
        },
        answer: "B",
        source: "Slide 10"
    },
    {
        id: 61,
        category: "Chapter 2: Relational Algebra",
        question: "The result of a relational algebra operation is always:",
        options: {
            A: "A single value.",
            B: "A list of variables.",
            C: "A relation (table).",
            D: "A graph."
        },
        answer: "C",
        source: "Slide 11"
    },
    {
        id: 62,
        category: "Chapter 2: Relational Algebra",
        question: "Which operation is used to combine two relations r and s into a single relation containing all tuples that are in r, in s, or in both?",
        options: {
            A: "Intersection (r ∩ s)",
            B: "Set Difference (r − s)",
            C: "Union (r ∪ s)",
            D: "Selection (σ)"
        },
        answer: "C",
        source: "Slide 12"
    },
    {
        id: 63,
        category: "Chapter 2: Relational Algebra",
        question: "For a Union operation (r ∪ s) to be valid, which condition must be met?",
        options: {
            A: "r and s must have different numbers of attributes.",
            B: "r and s must have the same number of attributes and compatible domains.",
            C: "r must be a subset of s.",
            D: "The names of the attributes must be identical."
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 64,
        category: "Chapter 2: Relational Algebra",
        question: "The Set Difference operation (r − s) returns:",
        options: {
            A: "Tuples that are in both r and s.",
            B: "Tuples that are in s but not in r.",
            C: "Tuples that are in r but not in s.",
            D: "All tuples from both relations."
        },
        answer: "C",
        source: "Slide 14"
    },
    {
        id: 65,
        category: "Chapter 2: Relational Algebra",
        question: "Which symbol represents the Cartesian Product operation?",
        options: {
            A: "×",
            B: "÷",
            C: "∪",
            D: "⋈"
        },
        answer: "A",
        source: "Slide 15"
    },
    {
        id: 66,
        category: "Chapter 2: Relational Algebra",
        question: "If relation r has 2 rows and relation s has 3 rows, how many rows will the Cartesian product r × s have?",
        options: {
            A: "5",
            B: "6",
            C: "2",
            D: "3"
        },
        answer: "B",
        source: "Slide 16"
    },
    {
        id: 67,
        category: "Chapter 2: Relational Algebra",
        question: "The Rename operation is denoted by the Greek letter:",
        options: {
            A: "Sigma (σ)",
            B: "Pi (Π)",
            C: "Rho (ρ)",
            D: "Beta (β)"
        },
        answer: "C",
        source: "Slide 17"
    },
    {
        id: 68,
        category: "Chapter 2: Relational Algebra",
        question: "What is the syntax for renaming a relation r to x?",
        options: {
            A: "σ_x(r)",
            B: "Π_x(r)",
            C: "ρ_x(r)",
            D: "r → x"
        },
        answer: "C",
        source: "Slide 18"
    },
    {
        id: 69,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is a Binary Operation (takes two relations as input)?",
        options: {
            A: "Select",
            B: "Project",
            C: "Rename",
            D: "Union"
        },
        answer: "D",
        source: "Slide 19"
    },
    {
        id: 70,
        category: "Chapter 2: Relational Algebra",
        question: "The ability to use the result of one relational operation as the input for another is called:",
        options: {
            A: "Normalization",
            B: "Composition",
            C: "Decomposition",
            D: "Aggregation"
        },
        answer: "B",
        source: "Slide 20"
    },
    // Chapter 3: Normalization & Functional Dependencies
    {
        id: 71,
        category: "Chapter 3: Normalization & FD",
        question: "What is the primary process for deciding which attributes should be grouped together in a relation to remove anomalies?",
        options: {
            A: "Indexing",
            B: "Normalization",
            C: "Aggregation",
            D: "Denormalization"
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 72,
        category: "Chapter 3: Normalization & FD",
        question: "Which of the following is NOT a purpose of normalization stated in the slides?",
        options: {
            A: "To minimize data redundancy.",
            B: "To simplify the enforcement of referential integrity constraints.",
            C: "To maximize the storage space used by the database.",
            D: "To make it easier to maintain data (insert, update, delete)."
        },
        answer: "C",
        source: "Slide 4"
    },
    {
        id: 73,
        category: "Chapter 3: Normalization & FD",
        question: "What is \"Data Redundancy\"?",
        options: {
            A: "The process of deleting data.",
            B: "The duplication of the same data in the table.",
            C: "The unique identification of rows.",
            D: "The connection between two tables."
        },
        answer: "B",
        source: "Slide 5"
    },
    {
        id: 74,
        category: "Chapter 3: Normalization & FD",
        question: "Which type of anomaly occurs when adding new rows forces the user to create duplicate data?",
        options: {
            A: "Insertion Anomaly",
            B: "Deletion Anomaly",
            C: "Modification Anomaly",
            D: "Selection Anomaly"
        },
        answer: "A",
        source: "Slide 6"
    },
    {
        id: 75,
        category: "Chapter 3: Normalization & FD",
        question: "Which type of anomaly occurs when deleting rows causes a loss of data that would be needed for other future rows?",
        options: {
            A: "Insertion Anomaly",
            B: "Deletion Anomaly",
            C: "Modification Anomaly",
            D: "Projection Anomaly"
        },
        answer: "B",
        source: "Slide 6"
    },
    {
        id: 76,
        category: "Chapter 3: Normalization & FD",
        question: "If changing data in one row forces changes to other rows because of duplication, this is called a(n):",
        options: {
            A: "Insertion Anomaly",
            B: "Deletion Anomaly",
            C: "Modification Anomaly",
            D: "Integrity Anomaly"
        },
        answer: "C",
        source: "Slide 6"
    },
    {
        id: 77,
        category: "Chapter 3: Normalization & FD",
        question: "A Functional Dependency A → B means:",
        options: {
            A: "Attribute B determines the value of attribute A.",
            B: "For each value of A, there is only one corresponding value of B.",
            C: "A and B are unrelated.",
            D: "A is the dependent attribute and B is the determinant."
        },
        answer: "B",
        source: "Slide 11"
    },
    {
        id: 78,
        category: "Chapter 3: Normalization & FD",
        question: "In the functional dependency A → B, the attribute A (left-hand side) is called the:",
        options: {
            A: "Dependent",
            B: "Determinant",
            C: "Relation",
            D: "Key"
        },
        answer: "B",
        source: "Slide 15"
    },
    {
        id: 79,
        category: "Chapter 3: Normalization & FD",
        question: "Which type of dependency occurs when the determinant is only part of the primary key (i.e., a proper subset of the key determines a non-prime attribute)?",
        options: {
            A: "Full Functional Dependency",
            B: "Partial Functional Dependency",
            C: "Transitive Functional Dependency",
            D: "Trivial Dependency"
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 80,
        category: "Chapter 3: Normalization & FD",
        question: "If X → Y, Y → Z, and X is the primary key, then X → Z is considered a __________ dependency.",
        options: {
            A: "Partial",
            B: "Full",
            C: "Transitive",
            D: "Reflexive"
        },
        answer: "C",
        source: "Slide 17"
    },
    {
        id: 81,
        category: "Chapter 3: Normalization & FD",
        question: "Which of Armstrong's Axioms states: \"If Y is a subset of X (X ⊇ Y), then X → Y\"?",
        options: {
            A: "Reflexivity",
            B: "Augmentation",
            C: "Transitivity",
            D: "Union"
        },
        answer: "A",
        source: "Slide 21"
    },
    {
        id: 82,
        category: "Chapter 3: Normalization & FD",
        question: "Which of Armstrong's Axioms states: \"If X → Y, then XZ → YZ\"?",
        options: {
            A: "Reflexivity",
            B: "Augmentation",
            C: "Transitivity",
            D: "Decomposition"
        },
        answer: "B",
        source: "Slide 21"
    },
    {
        id: 83,
        category: "Chapter 3: Normalization & FD",
        question: "The Union rule derived from Armstrong's Axioms states: \"If X → Y and X → Z, then __________\"",
        options: {
            A: "X → Y",
            B: "X → Z",
            C: "X → YZ",
            D: "Y → Z"
        },
        answer: "C",
        source: "Slide 22"
    },
    {
        id: 84,
        category: "Chapter 3: Normalization & FD",
        question: "What is the \"Closure\" of a set of attributes X (denoted as X⁺)?",
        options: {
            A: "The set of all attributes in the relation.",
            B: "The set of all primary keys.",
            C: "The set of all attributes that are functionally determined by X.",
            D: "The number of dependencies in the relation."
        },
        answer: "C",
        source: "Slide 24"
    },
    {
        id: 85,
        category: "Chapter 3: Normalization & FD",
        question: "A set of attributes that uniquely determines all the attributes of a relation is known as a:",
        options: {
            A: "Foreign Key",
            B: "Partial Key",
            C: "Super Key",
            D: "Dependent Key"
        },
        answer: "C",
        source: "Slide 31"
    },
    {
        id: 86,
        category: "Chapter 3: Normalization & FD",
        question: "What distinguishes a Candidate Key from a Super Key?",
        options: {
            A: "A Candidate Key must be a single attribute.",
            B: "A Candidate Key is a minimal Super Key (no proper subset is a Super Key).",
            C: "A Candidate Key allows null values.",
            D: "There is no difference."
        },
        answer: "B",
        source: "Slide 32"
    },
    {
        id: 87,
        category: "Chapter 3: Normalization & FD",
        question: "When finding candidate keys, if an attribute never appears on the right-hand side of any functional dependency, it:",
        options: {
            A: "Must be part of every candidate key.",
            B: "Cannot be part of any candidate key.",
            C: "Is a derived attribute.",
            D: "Is a redundant attribute."
        },
        answer: "A",
        source: "Slide 35"
    },
    {
        id: 88,
        category: "Chapter 3: Normalization & FD",
        question: "Which axiom is described by: \"If X → YZ, then X → Y and X → Z\"?",
        options: {
            A: "Union",
            B: "Decomposition",
            C: "Pseudo transitivity",
            D: "Extension"
        },
        answer: "B",
        source: "Slide 22"
    },
    {
        id: 89,
        category: "Chapter 3: Normalization & FD",
        question: "A → B is a Full Functional Dependency if:",
        options: {
            A: "B depends on a subset of A.",
            B: "B is fully functionally dependent on A, but not on any proper subset of A.",
            C: "A depends on B.",
            D: "A and B are the same attribute."
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 90,
        category: "Chapter 3: Normalization & FD",
        question: "Ideally, a well-structured relation allows users to insert, delete, and update rows without causing:",
        options: {
            A: "Data Redundancy",
            B: "Normalization",
            C: "Functional Dependencies",
            D: "Primary Keys"
        },
        answer: "A",
        source: "Slide 5"
    },
    // Chapter 3: Normal Forms (1NF, 2NF, 3NF, BCNF)
    {
        id: 91,
        category: "Chapter 3: Normal Forms",
        question: "What is the fundamental requirement for a relation to be in First Normal Form (1NF)?",
        options: {
            A: "It must have a composite primary key.",
            B: "It must not have any transitive dependencies.",
            C: "It must not have any multivalued attributes or repeating groups (values must be atomic).",
            D: "It must be in 2NF."
        },
        answer: "C",
        source: "Slide 5"
    },
    {
        id: 92,
        category: "Chapter 3: Normal Forms",
        question: "If a table contains a cell with multiple phone numbers for a single student (e.g., \"0905123, 0905456\"), which normal form does it violate?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "BCNF"
        },
        answer: "A",
        source: "Slide 5, 6"
    },
    {
        id: 93,
        category: "Chapter 3: Normal Forms",
        question: "From a structural point of view, which statement is true regarding the hierarchy of normal forms?",
        options: {
            A: "1NF is better than 2NF.",
            B: "2NF is better than 3NF.",
            C: "3NF is better than 2NF.",
            D: "Unnormalized data is better than 1NF."
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 94,
        category: "Chapter 3: Normal Forms",
        question: "A relation is in Second Normal Form (2NF) if it is in 1NF and:",
        options: {
            A: "It has no transitive dependencies.",
            B: "It has no partial dependencies.",
            C: "It has no multivalued attributes.",
            D: "It has a single-attribute primary key."
        },
        answer: "B",
        source: "Slide 11"
    },
    {
        id: 95,
        category: "Chapter 3: Normal Forms",
        question: "A Partial Functional Dependency exists when:",
        options: {
            A: "A non-key attribute is dependent on another non-key attribute.",
            B: "A non-key attribute is dependent on the whole primary key.",
            C: "A non-key attribute is dependent on part (but not all) of a composite primary key.",
            D: "A key attribute depends on a non-key attribute."
        },
        answer: "C",
        source: "Slide 11"
    },
    {
        id: 96,
        category: "Chapter 3: Normal Forms",
        question: "If a relation has a Primary Key consisting of a single attribute, which Normal Form condition is automatically met (provided it is already in 1NF)?",
        options: {
            A: "2NF",
            B: "3NF",
            C: "BCNF",
            D: "4NF"
        },
        answer: "A",
        source: "Slide 11"
    },
    {
        id: 97,
        category: "Chapter 3: Normal Forms",
        question: "In the functional dependency diagram for a table with Primary Key (OrderID, ProductID), if ProductName depends only on ProductID, this is an example of:",
        options: {
            A: "Full functional dependency.",
            B: "Transitive dependency.",
            C: "Partial dependency.",
            D: "Trivial dependency."
        },
        answer: "C",
        source: "Slide 12"
    },
    {
        id: 98,
        category: "Chapter 3: Normal Forms",
        question: "To convert a relation from 1NF to 2NF, you must:",
        options: {
            A: "Remove transitive dependencies by creating new tables.",
            B: "Remove partial dependencies by decomposing the relation into new relations where non-key attributes depend on the full key.",
            C: "Remove repeating groups.",
            D: "Define a primary key."
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 99,
        category: "Chapter 3: Normal Forms",
        question: "A relation is in Third Normal Form (3NF) if it is in 2NF and:",
        options: {
            A: "It has no repeating groups.",
            B: "It has no partial dependencies.",
            C: "It has no transitive dependencies.",
            D: "It has no determinants."
        },
        answer: "C",
        source: "Slide 15"
    },
    {
        id: 100,
        category: "Chapter 3: Normal Forms",
        question: "A Transitive Dependency exists when:",
        options: {
            A: "A → B and B → C, so A → C (where A is the Primary Key).",
            B: "Part of the key determines a non-key attribute.",
            C: "A non-key attribute determines part of the primary key.",
            D: "The primary key determines all attributes."
        },
        answer: "A",
        source: "Slide 15"
    },
    {
        id: 101,
        category: "Chapter 3: Normal Forms",
        question: "If a table contains attributes Student_ID (Key), Major, and Dept_Head, and Major determines Dept_Head, which normal form is violated?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "None"
        },
        answer: "C",
        source: "Slide 16"
    },
    {
        id: 102,
        category: "Chapter 3: Normal Forms",
        question: "What is the typical goal for business database design regarding normalization?",
        options: {
            A: "1NF is sufficient.",
            B: "2NF is sufficient.",
            C: "3NF is usually sufficient.",
            D: "BCNF is always required."
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 103,
        category: "Chapter 3: Normal Forms",
        question: "In the normalization process, which step comes immediately after removing partial dependencies?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "4NF"
        },
        answer: "C",
        source: "Slide 4"
    },
    {
        id: 104,
        category: "Chapter 3: Normal Forms",
        question: "Boyce-Codd Normal Form (BCNF) is a special case of which normal form?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "4NF"
        },
        answer: "C",
        source: "Slide 20"
    },
    {
        id: 105,
        category: "Chapter 3: Normal Forms",
        question: "A relation is in BCNF if and only if:",
        options: {
            A: "Every determinant is a candidate key.",
            B: "Every candidate key is a determinant.",
            C: "It is in 2NF.",
            D: "It has no composite keys."
        },
        answer: "A",
        source: "Slide 20"
    },
    {
        id: 106,
        category: "Chapter 3: Normal Forms",
        question: "BCNF handles anomalies that are not handled by 3NF. These anomalies usually occur when:",
        options: {
            A: "A table has a single candidate key.",
            B: "A table has multiple overlapping candidate keys.",
            C: "A table has no primary key.",
            D: "A table has only one attribute."
        },
        answer: "B",
        source: "Slide 20"
    },
    {
        id: 107,
        category: "Chapter 3: Normal Forms",
        question: "If a relation is in BCNF, it is also automatically in:",
        options: {
            A: "4NF",
            B: "3NF",
            C: "5NF",
            D: "Reverse 1NF"
        },
        answer: "B",
        source: "Slide 20"
    },
    {
        id: 108,
        category: "Chapter 3: Normal Forms",
        question: "Consider the dependency: A → B. If A is NOT a candidate key, but the relation is in 3NF, this suggests:",
        options: {
            A: "B must be a prime attribute (part of a candidate key).",
            B: "The relation is already in BCNF.",
            C: "It is a partial dependency.",
            D: "It is a multivalued dependency."
        },
        answer: "A",
        source: "BCNF vs 3NF context"
    },
    {
        id: 109,
        category: "Chapter 3: Normal Forms",
        question: "Why might the highest level of normalization (e.g., BCNF or 4NF) not always be desirable?",
        options: {
            A: "It takes too much storage space.",
            B: "It simplifies the database design too much.",
            C: "It creates too many tables, potentially requiring complex joins that affect performance.",
            D: "It increases data redundancy."
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 110,
        category: "Chapter 3: Normal Forms",
        question: "Which of the following is NOT a valid anomaly that normalization aims to eliminate?",
        options: {
            A: "Insertion Anomaly",
            B: "Deletion Anomaly",
            C: "Modification (Update) Anomaly",
            D: "Retrieval Anomaly"
        },
        answer: "D",
        source: "Slide 9"
    },
    // Chapter 4: Introduction to SQL & DDL/DML
    {
        id: 111,
        category: "Chapter 4: SQL & DDL/DML",
        question: "What does SQL stand for?",
        options: {
            A: "Structured Question Language",
            B: "Structured Query Language",
            C: "Simple Query Logic",
            D: "Standard Query Language"
        },
        answer: "B",
        source: "Slide 2"
    },
    {
        id: 112,
        category: "Chapter 4: SQL & DDL/DML",
        question: "SQL is primarily classified as which type of language?",
        options: {
            A: "Procedural",
            B: "Object-Oriented",
            C: "Non-procedural (Declarative)",
            D: "Functional"
        },
        answer: "C",
        source: "Slide 4"
    },
    {
        id: 113,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which subset of SQL commands is used to define the database structure (e.g., creating tables)?",
        options: {
            A: "DML (Data Manipulation Language)",
            B: "DDL (Data Definition Language)",
            C: "DCL (Data Control Language)",
            D: "TCL (Transaction Control Language)"
        },
        answer: "B",
        source: "Slide 8"
    },
    {
        id: 114,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which of the following is a DML (Data Manipulation Language) command?",
        options: {
            A: "CREATE",
            B: "ALTER",
            C: "INSERT",
            D: "DROP"
        },
        answer: "C",
        source: "Slide 8"
    },
    {
        id: 115,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which command is used to remove a table definition and its data from the database entirely?",
        options: {
            A: "DELETE",
            B: "REMOVE",
            C: "DROP",
            D: "TRUNCATE"
        },
        answer: "C",
        source: "Slide 9"
    },
    {
        id: 116,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which command is used to modify the structure of an existing table (e.g., adding a new column)?",
        options: {
            A: "UPDATE",
            B: "CHANGE",
            C: "ALTER",
            D: "MODIFY"
        },
        answer: "C",
        source: "Slide 9"
    },
    {
        id: 117,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which data type is typically used to store variable-length character strings?",
        options: {
            A: "CHAR",
            B: "VARCHAR",
            C: "INTEGER",
            D: "BOOLEAN"
        },
        answer: "B",
        source: "DDL Data Types"
    },
    {
        id: 118,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which constraint ensures that a column cannot have a NULL value?",
        options: {
            A: "UNIQUE",
            B: "NOT NULL",
            C: "CHECK",
            D: "DEFAULT"
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 119,
        category: "Chapter 4: SQL & DDL/DML",
        question: "A Primary Key constraint implicitly includes which other constraint?",
        options: {
            A: "NOT NULL and UNIQUE",
            B: "FOREIGN KEY",
            C: "CHECK",
            D: "DEFAULT"
        },
        answer: "A",
        source: "Slide 17"
    },
    {
        id: 120,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which constraint is used to establish a relationship between two tables (referential integrity)?",
        options: {
            A: "PRIMARY KEY",
            B: "FOREIGN KEY",
            C: "INDEX",
            D: "UNIQUE"
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 121,
        category: "Chapter 4: SQL & DDL/DML",
        question: "What is the correct syntax to add a new record to a table?",
        options: {
            A: "ADD INTO table_name VALUES (...)",
            B: "INSERT INTO table_name VALUES (...)",
            C: "UPDATE table_name SET (...)",
            D: "CREATE ROW IN table_name VALUES (...)"
        },
        answer: "B",
        source: "Slide 3, 23"
    },
    {
        id: 122,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which statement is used to modify existing records in a table?",
        options: {
            A: "ALTER",
            B: "MODIFY",
            C: "UPDATE",
            D: "CHANGE"
        },
        answer: "C",
        source: "Slide 3, 23"
    },
    {
        id: 123,
        category: "Chapter 4: SQL & DDL/DML",
        question: "To prevent deleting all rows in a table when using the DELETE command, what clause should you include?",
        options: {
            A: "WHERE",
            B: "HAVING",
            C: "LIKE",
            D: "FROM"
        },
        answer: "A",
        source: "SQL DELETE safety"
    },
    {
        id: 124,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which DCL command is used to give a user permission to perform specific actions on database objects?",
        options: {
            A: "ALLOW",
            B: "GRANT",
            C: "REVOKE",
            D: "PERMIT"
        },
        answer: "B",
        source: "Slide 8"
    },
    {
        id: 125,
        category: "Chapter 4: SQL & DDL/DML",
        question: "In a CREATE TABLE statement, what does the DEFAULT clause do?",
        options: {
            A: "It prevents duplicate values.",
            B: "It provides a value for a column if none is specified during insertion.",
            C: "It ensures the value falls within a specific range.",
            D: "It automatically increments the value."
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 126,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which of the following is NOT a benefit of standardizing SQL mentioned in the slides?",
        options: {
            A: "Reduced training costs.",
            B: "Application portability.",
            C: "Reduced dependence on a single vendor.",
            D: "Increased complexity of code."
        },
        answer: "D",
        source: "Slide 7"
    },
    {
        id: 127,
        category: "Chapter 4: SQL & DDL/DML",
        question: "What distinguishes DELETE from DROP?",
        options: {
            A: "DELETE removes the table structure; DROP removes rows.",
            B: "DELETE removes rows (data) but keeps the structure; DROP removes the structure and data.",
            C: "They are synonyms.",
            D: "DELETE is DDL; DROP is DML."
        },
        answer: "B",
        source: "DDL vs DML"
    },
    {
        id: 128,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which SQL standard year introduced major relational features first (often cited as the first ANSI standard)?",
        options: {
            A: "1970",
            B: "1979",
            C: "1986",
            D: "2016"
        },
        answer: "C",
        source: "Slide 5"
    },
    {
        id: 129,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which data type would be best for storing the price of a product (e.g., 19.99)?",
        options: {
            A: "INTEGER",
            B: "DECIMAL / NUMERIC",
            C: "VARCHAR",
            D: "DATE"
        },
        answer: "B",
        source: "SQL Data Types"
    },
    {
        id: 130,
        category: "Chapter 4: SQL & DDL/DML",
        question: "What is the purpose of the CHECK constraint?",
        options: {
            A: "To verify that the data exists in another table.",
            B: "To ensure that all values in a column are unique.",
            C: "To ensure that values in a column satisfy a specific condition.",
            D: "To check if the table exists before creating it."
        },
        answer: "C",
        source: "Slide 17"
    },
    // Chapter 4: SQL DML (SELECT, VIEW)
    {
        id: 131,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which SQL clause is used to identify the table(s) needed to process a query?",
        options: {
            A: "SELECT",
            B: "WHERE",
            C: "FROM",
            D: "ORDER BY"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 132,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "What is the purpose of the WHERE clause in a SELECT statement?",
        options: {
            A: "To select specific columns.",
            B: "To sort the results.",
            C: "To restrict the query to rows that meet specific conditions.",
            D: "To group rows based on values."
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 133,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which symbol is used in a SELECT statement to retrieve all columns from a table?",
        options: {
            A: "%",
            B: "*",
            C: "&",
            D: "#"
        },
        answer: "B",
        source: "Slide 6"
    },
    {
        id: 134,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "How are string (character) comparisons made in SQL?",
        options: {
            A: "Right-to-left alphabetic comparison.",
            B: "Based on string length.",
            C: "Left-to-right ASCII character comparison.",
            D: "Case-insensitive comparison by default only."
        },
        answer: "C",
        source: "Slide 8"
    },
    {
        id: 135,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which keyword is used to give an alternate name to a column or table in a SQL statement?",
        options: {
            A: "NAME",
            B: "ALIAS",
            C: "AS",
            D: "RENAME"
        },
        answer: "C",
        source: "Slide 11"
    },
    {
        id: 136,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which operator is used to check whether an attribute value is within a specific range?",
        options: {
            A: "IN",
            B: "LIKE",
            C: "BETWEEN",
            D: "EXISTS"
        },
        answer: "C",
        source: "Slide 14"
    },
    {
        id: 137,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which operator is used to check for character patterns using wildcards?",
        options: {
            A: "MATCH",
            B: "LIKE",
            C: "CONTAINS",
            D: "SEARCH"
        },
        answer: "B",
        source: "Slide 14"
    },
    {
        id: 138,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "In SQL, which logical operator allows you to check if a value matches any value within a list?",
        options: {
            A: "LIST",
            B: "EXISTS",
            C: "IN",
            D: "INCLUDE"
        },
        answer: "C",
        source: "Slide 14, 17"
    },
    {
        id: 139,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "What does the special operator IS NULL check for?",
        options: {
            A: "Values that are zero.",
            B: "Values that are empty strings.",
            C: "Values that are missing or undefined (null).",
            D: "Values that are negative."
        },
        answer: "C",
        source: "Slide 14, 16"
    },
    {
        id: 140,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which SQL clause is used to sort the result set?",
        options: {
            A: "SORT BY",
            B: "ORDER BY",
            C: "GROUP BY",
            D: "ARRANGE BY"
        },
        answer: "B",
        source: "Slide 20"
    },
    {
        id: 141,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "By default, in which order does ORDER BY sort the records?",
        options: {
            A: "Descending",
            B: "Ascending",
            C: "Random",
            D: "Insertion order"
        },
        answer: "B",
        source: "Slide 20"
    },
    {
        id: 142,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which SQL keyword is used to list only unique values and eliminate duplicate rows?",
        options: {
            A: "UNIQUE",
            B: "DISTINCT",
            C: "DIFFERENT",
            D: "SINGLE"
        },
        answer: "B",
        source: "Slide 21"
    },
    {
        id: 143,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which aggregate function returns the total sum of values in a column?",
        options: {
            A: "COUNT",
            B: "MAX",
            C: "SUM",
            D: "TOTAL"
        },
        answer: "C",
        source: "Slide 22"
    },
    {
        id: 144,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "The COUNT aggregate function is used to:",
        options: {
            A: "Calculate the average of values.",
            B: "Find the maximum value.",
            C: "Tally the number of non-null values in an attribute (or rows).",
            D: "Sum all values."
        },
        answer: "C",
        source: "Slide 22"
    },
    {
        id: 145,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which clause is commonly used with aggregate functions to group rows that have the same values?",
        options: {
            A: "ORDER BY",
            B: "GROUP BY",
            C: "WHERE",
            D: "HAVING"
        },
        answer: "B",
        source: "Slide 27"
    },
    {
        id: 146,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "The HAVING clause is specifically designed to:",
        options: {
            A: "Restrict rows before grouping.",
            B: "Restrict the output of a GROUP BY query (apply conditions to groups).",
            C: "Sort the grouped data.",
            D: "Join multiple tables."
        },
        answer: "B",
        source: "Slide 29"
    },
    {
        id: 147,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Can you use an aggregate function (like COUNT or SUM) in a WHERE clause?",
        options: {
            A: "Yes, always.",
            B: "No, aggregate functions must be used in the HAVING clause when filtering groups.",
            C: "Yes, but only with subqueries.",
            D: "No, they can only be used in the ORDER BY clause."
        },
        answer: "B",
        source: "Slide 29"
    },
    {
        id: 148,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "What is a VIEW in SQL?",
        options: {
            A: "A physical table that stores data permanently.",
            B: "A virtual table based on a SELECT query.",
            C: "A backup of a table.",
            D: "A temporary table for calculations."
        },
        answer: "B",
        source: "Slide 31"
    },
    {
        id: 149,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which command is used to create a view?",
        options: {
            A: "MAKE VIEW",
            B: "CREATE VIEW",
            C: "NEW VIEW",
            D: "DEFINE VIEW"
        },
        answer: "B",
        source: "Slide 31"
    },
    {
        id: 150,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which command is used to remove a view from the database?",
        options: {
            A: "DELETE VIEW",
            B: "REMOVE VIEW",
            C: "DROP VIEW",
            D: "ERASE VIEW"
        },
        answer: "C",
        source: "Slide 31"
    },
    // Chapter 4: SQL Subqueries and Joins
    {
        id: 151,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "What is a Subquery in SQL?",
        options: {
            A: "A query that joins two tables.",
            B: "A query inside another query.",
            C: "A query that creates a new table.",
            D: "A query that deletes data."
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 152,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A subquery is most commonly found in which clause of the outer query?",
        options: {
            A: "SELECT",
            B: "FROM",
            C: "WHERE",
            D: "GROUP BY"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 153,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which of the following is NOT allowed in a standard subquery SELECT statement?",
        options: {
            A: "Aggregate functions (SUM, AVG)",
            B: "The keyword DISTINCT",
            C: "An ORDER BY phrase",
            D: "A WHERE clause"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 154,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A Noncorrelated (Self-contained) subquery:",
        options: {
            A: "Depends on values from the outer query.",
            B: "Executes once for each row returned by the outer query.",
            C: "Has no dependency on the outer query and executes once for the entire outer query.",
            D: "Cannot return a list of values."
        },
        answer: "C",
        source: "Slide 4"
    },
    {
        id: 155,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A Correlated subquery:",
        options: {
            A: "Executes once for the entire outer query.",
            B: "Depends on values from the outer query and executes once for each row of the outer query.",
            C: "Is strictly forbidden in SQL.",
            D: "Must always return a single value."
        },
        answer: "B",
        source: "Slide 4"
    },
    {
        id: 156,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which operator is commonly used with Correlated Subqueries to check for the existence of rows?",
        options: {
            A: "IN",
            B: "EXISTS",
            C: "LIKE",
            D: "BETWEEN"
        },
        answer: "B",
        source: "Slide 4"
    },
    {
        id: 157,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A Scalar Subquery returns:",
        options: {
            A: "A list of values (one column, multiple rows).",
            B: "A virtual table (multiple columns, multiple rows).",
            C: "A single value (one column, one row).",
            D: "No value."
        },
        answer: "C",
        source: "Slide 5, 10"
    },
    {
        id: 158,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which operators are used with Scalar Subqueries?",
        options: {
            A: "IN, ANY, ALL",
            B: "Comparison operators (=, >, <, >=, <=, <>)",
            C: "UNION, INTERSECT",
            D: "LIKE, IS NULL"
        },
        answer: "B",
        source: "Slide 10"
    },
    {
        id: 159,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "If a Scalar Subquery returns multiple values, what happens?",
        options: {
            A: "It selects the first value.",
            B: "It selects the maximum value.",
            C: "The DBMS generates an error.",
            D: "It automatically converts to a list."
        },
        answer: "C",
        source: "Slide 10"
    },
    {
        id: 160,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which operator is used with Multi-Valued Subqueries to check if a value matches any member in a list?",
        options: {
            A: "=",
            B: "IN",
            C: "LIKE",
            D: "IS"
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 161,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "The ALL operator in a subquery means:",
        options: {
            A: "Equal to any member in the list.",
            B: "The condition must be true for all values returned by the subquery.",
            C: "The condition must be true for at least one value.",
            D: "All rows from the table are returned."
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 162,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "What does the ANY operator do?",
        options: {
            A: "Returns rows that match all values in the list.",
            B: "Returns rows that match any value in the list returned by the subquery.",
            C: "Returns a random row.",
            D: "It is a synonym for IN."
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 163,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which type of Join returns rows when there is a match in both tables?",
        options: {
            A: "Left Outer Join",
            B: "Right Outer Join",
            C: "Inner Join",
            D: "Full Outer Join"
        },
        answer: "C",
        source: "Slide 22"
    },
    {
        id: 164,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which type of Join returns all rows from the left table, and the matched rows from the right table?",
        options: {
            A: "Inner Join",
            B: "Left Outer Join",
            C: "Right Outer Join",
            D: "Cross Join"
        },
        answer: "B",
        source: "Slide 25"
    },
    {
        id: 165,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "If there is no match in a Left Outer Join, the result from the right side will contain:",
        options: {
            A: "The previous row's value.",
            B: "Zeros.",
            C: "NULL.",
            D: "An error message."
        },
        answer: "C",
        source: "Slide 25"
    },
    {
        id: 166,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A Self Join is:",
        options: {
            A: "A join between two different tables with the same name.",
            B: "A join in which a table is joined with itself.",
            C: "A join that combines all columns from two tables.",
            D: "Impossible in SQL."
        },
        answer: "B",
        source: "Slide 28"
    },
    {
        id: 167,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which join produces a Cartesian product (every row of one table combined with every row of the other)?",
        options: {
            A: "Natural Join",
            B: "Equi-Join",
            C: "Cross Join",
            D: "Outer Join"
        },
        answer: "C",
        source: "Slide 29"
    },
    {
        id: 168,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "The UNION set operator:",
        options: {
            A: "Returns common rows between two queries.",
            B: "Returns all rows from both queries and removes duplicates.",
            C: "Returns all rows including duplicates.",
            D: "Returns rows from the first query that are not in the second."
        },
        answer: "B",
        source: "Slide 32"
    },
    {
        id: 169,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which set operator returns only the rows that appear in both result sets (common rows)?",
        options: {
            A: "UNION",
            B: "UNION ALL",
            C: "INTERSECT",
            D: "EXCEPT (or MINUS)"
        },
        answer: "C",
        source: "Slide 32"
    },
    {
        id: 170,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which set operator returns rows from the first query that are not present in the second query?",
        options: {
            A: "UNION",
            B: "INTERSECT",
            C: "EXCEPT (or MINUS)",
            D: "CROSS JOIN"
        },
        answer: "C",
        source: "Slide 32"
    }
];

// Get all unique categories
function getMCQCategories() {
    const categories = [...new Set(mcqData.map(q => q.category))];
    return categories;
}

// Get questions by category
function getQuestionsByCategory(category) {
    if (category === "All") {
        return mcqData;
    }
    return mcqData.filter(q => q.category === category);
}
