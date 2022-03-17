/**
 * Returns first match for given property
 *
 * @param property
 * @param object
 */
export function searchProperty(property: unknown, object: Record<keyof any, any>): unknown | null {
    for (const objectProperty in object) {
        if (objectProperty === property) {
            return object[objectProperty]
        }

        if (typeof object[objectProperty] === 'object') {
            return searchProperty(property, object[objectProperty])
        }
    }

    return null
}

/**
 * Returns all matches for given property
 *
 * @param property
 * @param object
 */
export function searchPropertyAll(property: unknown, object: Record<keyof any, any>): unknown[] {
    let propertyInstances = []

    for (const objectProperty in object) {
        if (objectProperty === property) {
            propertyInstances.push(object[objectProperty])
        }

        if (typeof object[objectProperty] === 'object') {
            propertyInstances = [
                ...propertyInstances,
                searchPropertyAll(property, object[objectProperty]),
            ]
        }
    }

    return propertyInstances.flat()
}

/**
 * Returns first match for all given properties
 *
 * @param properties
 * @param object
 */
export function searchProperties(properties: unknown[], object: Record<keyof any, any>): unknown[] {
    const propertyInstances = []

    for (const property of properties) {
        propertyInstances.push(searchProperty(property, object))
    }

    return propertyInstances
}

/**
 * Returns all matches for all given properties
 *
 * @param properties
 * @param object
 */
export function searchPropertiesAll(properties: unknown[], object: Record<keyof any, any>): unknown {
    const propertyInstances = []

    for (const property of properties) {
        propertyInstances.push(searchPropertyAll(property, object))
    }

    return propertyInstances
}
