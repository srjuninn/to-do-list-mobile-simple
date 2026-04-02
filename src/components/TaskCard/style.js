const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 15,
      marginBottom: 10,
      flexDirection: 'column',
      borderLeftWidth: 6,
      elevation: 2,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: theme.colors.textMain,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.textSub,
    },
    badge: {
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 5,
    },
    dateContainer: {
        marginTop: 5,
    },
    dateText: {
        fontSize: 10,
        color: '#94a3b8',
    },
    actions: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginLeft: 10,
    },
    icon: {
        marginHorizontal: 8,
    color: theme.colors.primary,
    fontWeight: 'bold',
},
})