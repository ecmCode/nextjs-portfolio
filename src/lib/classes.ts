
/**
 * Concats two or more different tailwind module styles, works with conditional styles.
 * @param args imported module css or tailwind classes
 */
export const classes = (...args : string[]) : string => {
    return args.join(' ')
}