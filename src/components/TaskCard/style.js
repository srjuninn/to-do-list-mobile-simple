const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
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
    color: theme.colors.textSub,
    marginTop: 4,
  },
  badge: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 6,
  },
  dateContainer: {
    marginTop: 5,
  },
  dateText: {
    fontSize: 11,
    color: '#94a3b8',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginRight: 15,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
})